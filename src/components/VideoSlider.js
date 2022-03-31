import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

// Import medium zoom styles
import '../css/imagezoom.css';

import PaginatorButton from './CameraImageSlider/PaginatorButton';

const Carousel = styled.div`
  display: block;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 100%;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;

    li {
      margin: 0 0.5rem;
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

function VideoSlider({ settings, children }) {
  // Check if we received valid data
  const renderPaginator = (direction) => (
    <PaginatorButton size="medium" backgroundColor="blue" direction={direction} />
  );

  return (
    <Carousel className="VideoSlider">
      {children ? (
        <Slider
          {...settings}
          prevArrow={renderPaginator('Left')}
          nextArrow={renderPaginator('Right')}
        >
          {children}
        </Slider>
      ) : null}
    </Carousel>
  );
}

VideoSlider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ])
  ),
};

VideoSlider.defaultProps = {
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
};

export default VideoSlider;
