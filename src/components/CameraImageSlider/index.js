import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'react-medium-image-zoom';
import Slider from 'react-slick';
import styled from 'styled-components';
import { uid } from 'react-uid';

// Import medium zoom styles
import '../../css/imagezoom.css';

import PaginatorButton from './PaginatorButton';

const Carousel = styled.div`
  display: block;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 320px;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;

    li {
      margin: 0 0.25rem;
    }

    button {
      display: block;
      width: 1rem;
      height: 1rem;
      padding: 0;
      border: none;
      border-radius: 100%;
      background-color: grey;
      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: #4cb4e6;
    }
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    display: flex;
    align-items: center;
  }
`;

const NotAvailble = styled.div`
  min-width: 100px;
  min-height: 192px;
  background-color: black;
  display: block;
  overflow: hidden;
  text-align: center;
  position: relative;

  p {
    color: white;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function CameraSlider({ images, settings, customSettings }) {
  const [errored, setErrored] = useState(false);
  // Check if we received valid data
  const renderPaginator = (direction) => <PaginatorButton direction={direction} />;

  /**
   * Error handler, something went wrong, for example,
   * broken image or network issues. Set `errored` state
   * to true.
   */
  const onErrorHandler = () => {
    setErrored(true);
  };

  /**
   * Load handler, when image loaded successfully, set
   * `errored` state to false.
   */
  const onLoadHandler = () => {
    setErrored(false);
  };

  const errorMessage = (
    <>
      <h3>Live View</h3>
      <NotAvailble>
        <p>This camera is not being displayed right now — please try another boat</p>
      </NotAvailble>
    </>
  );

  return (
    <Carousel className="CameraSlider">
      {images && images.length > 0 ? (
        <Slider
          {...settings}
          {...customSettings}
          prevArrow={renderPaginator('Left')}
          nextArrow={renderPaginator('Right')}
        >
          {images.map((image, index) => {
            const title = Object.keys(image)[0];
            const url = image[title];

            // Make sure image is loaded correctly, otherwise show an error
            const content = !errored ? (
              <ImageZoom>
                <img
                  src={url}
                  alt={title}
                  className="webcam-img"
                  style={{ width: '100%' }}
                  onError={onErrorHandler}
                  onLoad={onLoadHandler}
                />
              </ImageZoom>
            ) : (
              errorMessage
            );

            return (
              <React.Fragment key={uid(image, index)}>
                {title && <h3>{title} Live</h3>}
                {content}
              </React.Fragment>
            );
          })}
        </Slider>
      ) : (
        errorMessage
      )}
    </Carousel>
  );
}

CameraSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  settings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ])
  ),
  customSettings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ])
  ),
};

CameraSlider.defaultProps = {
  images: [],
  // React Slick settings
  settings: {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    draggable: true,
  },
  customSettings: {},
};

export default CameraSlider;
