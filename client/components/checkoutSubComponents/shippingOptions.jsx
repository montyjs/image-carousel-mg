/* eslint-disable react/forbid-prop-types */
import React from 'react';

const ShippingOptions = () => (
  <div>
    <form>
      {' '}
      <input id="ship" type="radio" />
      <label htmlFor="ship">Ship to address</label>
      <br />
      <input id="pickup" type="radio" />
      <label htmlFor="pickup">
      Pick up in store - Free
      </label>
      <br />
      <a href="https://www.rei.com/map/store">
      Find a store near you
      </a>
    </form>
  </div>
);


export default ShippingOptions;
