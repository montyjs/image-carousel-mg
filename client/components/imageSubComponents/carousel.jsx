import React from 'react';
import PropTypes from 'prop-types';
import Item from './carouselItem';

const Carousel = ({ images }) => (
  <div className="carousel">
    {images.map(img => <Item {...img} key={`thumb-${img.id}`} />)}
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
