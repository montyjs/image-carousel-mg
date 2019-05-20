import React from 'react';
import PropTypes from 'prop-types';

const ShoeSizeSelect = () => (
  <div className="shoe-size-select">
    <label htmlFor="selectSize">Size</label>
    <select id="selectSize">
      <option>Select Size</option>
      <optgroup>
        {' '}
Available
        <option>42 Eu</option>
      </optgroup>
    </select>
  </div>
);

export default ShoeSizeSelect;
