/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ColorSelect = ({ color, images, handler }) => (
  <div className="color-wrapper">
    <p>
      { `Color: ${color.slice(0, 1).toUpperCase() + color.slice(1)}` }
    </p>
    <div className="row">
      {images.map((img, i) => (
        <div
          className={img.color === color ? 'active icon' : 'icon'}
          role="button"
          tabIndex={i}
          onClick={handler}
          onKeyPress={() => {}}
        >
          <img src={img.url} alt={`${img.color} color`} />
        </div>
      ))}
    </div>
  </div>
);


ColorSelect.propTypes = {
  color: PropTypes.string.isRequired,
  images: PropTypes.shape({
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    orientation: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default ColorSelect;
