/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ShippingOptions = ({ handler, option }) => (
  <div className="shipping-options">
    <div className="radio">
      <input
        id="ship"
        type="radio"
        name="ship-opt"
        value="ship"
        checked={option === 'ship'}
        onChange={handler}
      />
      <label htmlFor="ship">
      Ship to address
      </label>
    </div>
    <div className="radio">
      <input
        id="pickup"
        type="radio"
        name="ship-opt"
        value="pickup"
        checked={option === 'pickup'}
        onChange={handler}
      />
      <label htmlFor="pickup">
        Pick up in store - Free
      </label>
    </div>
    <a href="https://www.rei.com/map/store">
      Find a store near you
    </a>
  </div>
);

ShippingOptions.propTypes = {
  handler: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};


export default ShippingOptions;
