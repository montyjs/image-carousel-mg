/* eslint-disable react/forbid-prop-types */
import React from 'react';

const CheckoutQuantity = () => (
  <div className="checkout-quantity">
    <button type="button" data-val="decrement">
      <i className="fas fa-minus-circle quantity-icon" />
    </button>
    <input name="quantity" type="text" min="1" max="9999" minLength="1" maxLength="4" required="required" className="product-quantity-selector" value="1" />
    <button type="button" data-val="increment">
      <i className="fas fa-plus-circle quantity-icon" />
    </button>
  </div>
);


export default CheckoutQuantity;
