/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ColorSelect = ({ color }) => (
  <div className="color-wrapper">
    { `Color: ${color.slice(0, 1).toUpperCase() + color.slice(1)}` }
    <img src="https://rei.com/media/4f72b233-00f4-449b-b3c8-c338b526cb05?size=60" className="shoe-thumbnail" alt="shoe-thumbnail" />
  </div>
);


ColorSelect.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorSelect;
