/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ShoeSizeSelect = ({ shoeSizes }) => (
  <div className="shoe-size-select">
    <div className="select-labels">
      <label htmlFor="selectSize">Size</label>
      <span className="size-chart-tab">
        <a href="#product-wrapper">
      Size Chart
        </a>
      </span>
    </div>
    <select name="selectSize" id="selectSize" onChange={() => {}}>
      <option>
      Select Size
      </option>
      <optgroup label="Available">
        {' '}
Available
        {shoeSizes.map(size => <option value={size} key={`${size}eu`}>{`${size} Eu`}</option>)}
      </optgroup>
    </select>
  </div>
);

ShoeSizeSelect.propTypes = {
  shoeSizes: PropTypes.array.isRequired,
};

export default ShoeSizeSelect;
