import React from 'react';
import PropTypes from 'prop-types';
import Item from './carouselItem';

const Carousel = ({ images, handler }) => (
  <div className="carousel">
    {images.map(img => <Item {...img} handler={handler} key={`thumb-${img.id}`} />)}
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Carousel;
