/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ShoeSizeSelect = ({ shoeSizes }) => (
  <div className="shoe-size-select">
    <label htmlFor="selectSize">Size</label>
    <select name="selectSize" id="selectSize">
      <option>
      Select Size
      </option>
      <optgroup label="Available">
        {' '}
Available
        {shoeSizes.map(size => <option>{`${size} Eu`}</option>)}
      </optgroup>
    </select>
  </div>
);

ShoeSizeSelect.propTypes = {
  shoeSizes: PropTypes.array.isRequired,
};

export default ShoeSizeSelect;
