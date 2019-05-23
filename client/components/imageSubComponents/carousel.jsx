import React from 'react';
import PropTypes from 'prop-types';
import Item from './carouselItem';

const Carousel = ({ images, handler }) => (
  <div className="carousel">
    <button type="button" className="left">
      <span className="left-arrow">&lt;</span>
    </button>
    {images.map((img, i) => <Item {...img} handler={handler} index={i} key={`thumb-${img.id}`} />)}
    <button type="button" className="right">
      <span className="right-arrow">&gt;</span>
    </button>
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Carousel;
