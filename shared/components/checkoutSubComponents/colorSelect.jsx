/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ColorSelect = ({ color, images, handler }) => (
  <div className="color-wrapper">
    <p>
      {`Color: ${color.slice(0, 1).toUpperCase() + color.slice(1)}`}
    </p>
    <div className="row">
      {images.slice(0, 2).map((img, i) => (
        <div
          className={img.color === color ? 'icon' : 'icon'}
          role="button"
          tabIndex={i}
          onClick={handler}
          onKeyPress={() => { }}
          key={`${img.id}icon`}
        >
          {img.color === color ? <div className="active" /> : null}
          <img src={img.url} alt={`${img.color} color`} value={color} />
        </div>
      ))}
    </div>
  </div>
);


ColorSelect.propTypes = {
  color: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handler: PropTypes.func.isRequired,
};

export default ColorSelect;
