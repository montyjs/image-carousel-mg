/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ColorSelect = ({ color }) => (
  <div className="color-wrapper">
    <p>
      { `Color: ${color.slice(0, 1).toUpperCase() + color.slice(1)}` }
    </p>
    <div className="row">
      <div className="thumbnail-wrapper">
        <img src="https://rei.com/media/4f72b233-00f4-449b-b3c8-c338b526cb05?size=60" alt="flame color" />
      </div>
      <div className="thumbnail-wrapper">
        <img src="https://www.rei.com/media/f85ca8b1-5e82-44d6-97c1-cf38c88154b0" alt="kiwi color" />
      </div>
    </div>
  </div>
);


ColorSelect.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorSelect;
