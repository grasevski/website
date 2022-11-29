import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polyline,
  MarkerClusterer,
} from '@react-google-maps/api';
import useHttp from '../../common/api/useHttp';
import { Boat, inlineSvgIcon, getColorVariation } from './BoatIcon';
import CameraSlider from '../CameraImageSlider';
import configuration from '../../common/api/configuration';
import { useWindowSize } from '../../common/hooks';
import MapScale from './MapScale';

// Reference for options:
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

const options = {
  disableDefaultUI: false,
  mapTypeId: 'satellite',
  mapTypeControl: false,
  streetViewControl: false,
  gestureHandling: 'greedy',
};

function GMap({ apiKey, currentVessel, setCurrentVessel, droneData }) {
  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Get Google Maps API key from props
    googleMapsApiKey: apiKey,
  });

  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: -33.90594, lng: 151.23461 });
  const [markerMap, setMarkerMap] = useState({});
  const [zoom, setZoom] = useState(12);
  const [areBoundsSet, setBounds] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  // Get window size
  const windowSize = useWindowSize();

  // Fetch data periodically
  const [, trailData] = useHttp(
    `${configuration.DRONE_COLLECTION_URL}/locations?timespan=day`,
    10000,
    []
  );

  // Iterate through the JSON data and extract distinct coordinates for each drone
  const makeTrailCoordinates = (data) => {
    const lookup = {};

    if (data.length > 0) {
      data.map((item) => {
        const name = item.Name;
        if (!(name in lookup)) {
          lookup[name] = [];
          lookup[name].push({
            lat: Number(item.Lat),
            lng: Number(item.Lon),
            time: item.Timestamp,
          });
        } else {
          lookup[name].push({
            lat: Number(item.Lat),
            lng: Number(item.Lon),
            time: item.Timestamp,
          });
        }
        return false;
      });
    }
    Object.keys(lookup).forEach((name) => {
      lookup[name].sort((a, b) => a.time - b.time);
    });
    return lookup;
  };

  const trailCoordinates = makeTrailCoordinates(trailData.filter(({Props}) => {
    if (!Props) return false;
    const loc = Props.Location.Coordinates;
    return loc.Lat != 0 || loc.Lon != 0;
  }));

  /**
   * Iterate fetched data to size, center, and zoom map to contain all markers
   *
   * @param {Object} map React ref of the map
   * @param {Array} data An array with API data
   * @returns Bounds to contain all markers on the map
   */
  const fitBoatsOnMap = (map, data = []) => {
    const newBounds = new window.google.maps.LatLngBounds();

    data.map((boat) => {
      const latLng = new window.google.maps.LatLng(
        parseFloat(boat.Props.Location.Coordinates.Lat),
        parseFloat(boat.Props.Location.Coordinates.Lon)
      );
      newBounds.extend(latLng);
      return latLng;
    });
    map.fitBounds(newBounds);
    // Fix zoom value
    const currentZoom = map.getZoom();
    setZoom(currentZoom);

    return newBounds;
  };

  // Fit map bounds to contain all markers
  if (droneData.length > 0 && !areBoundsSet) {
    fitBoatsOnMap(mapRef, droneData);
    setBounds(true);
  }

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
  };

  const onZoomChange = () => {
    // Check if bounds set to se
    if (mapRef && areBoundsSet) {
      // Set zoom accordingly
      setZoom(mapRef.getZoom());
    }
  };

  /**
   * We have to create a mapping of our boats to actual Marker objects
   * @param {Object} marker Link to the marker object
   * @param {Number} index Marker Id
   * @returns
   */
  const markerLoadHandler = (marker, index) =>
    setMarkerMap((prevState) => ({ ...prevState, [index]: marker }));

  const markerSwitchHandler = (event, boat) => {
    // Only if map is loaded
    if (isLoaded) {
      // Remember which boat was clicked
      setCurrentVessel(boat.Id);

      // Don't open the info window on mobile if vessel was chosen in dropdown
      if (!(!event && windowSize.innerWidth <= 1056)) {
        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
          setInfoOpen(false);
        }

        setInfoOpen(true);
      }

      // Get the max zoom level
      const latLng = new window.google.maps.LatLng(
        parseFloat(boat.Props.Location.Coordinates.Lat),
        parseFloat(boat.Props.Location.Coordinates.Lon)
      );
      const maxZoomService = new window.google.maps.MaxZoomService();
      maxZoomService.getMaxZoomAtLatLng(latLng).then((result) => {
        const maxZoom = result.zoom;
        if (zoom > maxZoom) {
          // Adjust zoom level if current zoom is too big
          setZoom(maxZoom);
        }
      });

      // Center the selected marker
      setCenter({
        lat: parseFloat(boat.Props.Location.Coordinates.Lat),
        lng: parseFloat(boat.Props.Location.Coordinates.Lon),
      });
    }
  };

  // When user selects vessel in dropdown, update currentVessel state accordingly
  useEffect(() => {
    markerSwitchHandler(null, droneData[currentVessel]);
  }, [currentVessel]);

  let mapContainerStyle = {};
  if (windowSize.innerWidth <= 767) {
    mapContainerStyle = {
      height: `calc(${windowSize.innerHeight}px - 60px)`,
    };
  } else {
    mapContainerStyle = {
      height: `${windowSize.innerHeight}px`,
    };
  }

  const renderMap = () => (
    <GoogleMap
      id="google-map"
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      onZoomChanged={onZoomChange}
      center={center}
      options={options}
      // Do stuff on map initial load
      onLoad={loadHandler}
      onClick={() => {
        setInfoOpen(false);
      }}
    >
      {droneData.length > 0 && (
        <>
          <MarkerClusterer averageCenter enableRetinaIcons gridSize={5}>
            {(clusterer) =>
              droneData.map((boat) => (
                <Marker
                  key={boat.Id}
                  position={{
                    lat: parseFloat(boat.Props.Location.Coordinates.Lat),
                    lng: parseFloat(boat.Props.Location.Coordinates.Lon),
                  }}
                  icon={inlineSvgIcon(
                    <Boat
                      index={boat.Id}
                      rotation={parseFloat(boat.Props.Heading)}
                      color={boat.SailColor}
                      insideColor={boat.BoatColor}
                    />
                  )}
                  label={{
                    text: boat.Name,
                    className: 'uppercase',
                    color: boat.SailColor ? boat.SailColor : '#ffff00',
                    fontSize: '13px',
                    fontWeight: 'bold',
                  }}
                  onLoad={(marker) => markerLoadHandler(marker, boat.Id)}
                  onClick={(event) => markerSwitchHandler(event, boat)}
                  clusterer={clusterer}
                >
                  {infoOpen && boat.Id === currentVessel && (
                    <InfoWindow
                      anchor={markerMap[currentVessel]}
                      onCloseClick={() => {
                        setInfoOpen(false);
                      }}
                    >
                      <CameraSlider images={boat.Props.Cameras} />
                    </InfoWindow>
                  )}
                </Marker>
              ))
            }
          </MarkerClusterer>
          {droneData.map((boat) => {
            // Generate unique color for this vessel
            const lineColor = boat.SailColor ? boat.SailColor : getColorVariation(boat.Id)[0];

            return (
              <Polyline
                key={boat.Id}
                path={trailCoordinates[boat.Name]}
                options={{
                  strokeColor: lineColor,
                  strokeOpacity: 0.8,
                  strokeWeight: 3,
                  fillColor: lineColor,
                  fillOpacity: 0.5,
                  clickable: false,
                  draggable: false,
                  editable: false,
                  visible: true,
                  radius: 30000,
                  paths: trailCoordinates[boat.Name],
                  zIndex: 1,
                }}
              />
            );
          })}
        </>
      )}

      {zoom && <MapScale zoom={parseInt(zoom, 10)} />}
    </GoogleMap>
  );

  return isLoaded ? renderMap() : null;
}

GMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  currentVessel: PropTypes.number,
  setCurrentVessel: PropTypes.func,
};

GMap.defaultProps = {
  currentVessel: 0,
  setCurrentVessel: () => {},
};

export default GMap;
