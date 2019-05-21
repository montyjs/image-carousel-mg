/* eslint-disable react/forbid-prop-types */
import React from 'react';

const ShippingOptions = () => (
  <div className="shipping-options">
    <div className="radio">
      <input
        id="ship"
        type="radio"
        name="ship-opt"
        value="ship"
        checked="checked"
        onChange={() => {}}
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
        onChange={() => {}}
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


export default ShippingOptions;
