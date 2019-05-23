/* eslint-disable react/forbid-prop-types */
import React from 'react';

const BuyButtons = () => (
  <div className="buy">
    <button className="primary-checkout-btn" type="button">
      <span>
      Add to cart
      </span>
    </button>
    <div className="secondary-btns">
      <button type="button">
      Add to wish list
      </button>
      <button type="button">
      Add to cart
      </button>
    </div>
    <a href="#">REI return policy</a>
  </div>
);


export default BuyButtons;
