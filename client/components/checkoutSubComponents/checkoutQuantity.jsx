/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CheckoutQuantity = ({ click, input, quantity }) => (
  <div className="checkout-quantity">
    <button
      type="button"
      value="dec"
      onClick={click}
    >
      <i className="fas fa-minus-circle quantity-icon" data-val="dec" />
    </button>
    <input
      name="quantity"
      type="text"
      min="1"
      max="9999"
      minLength="1"
      maxLength="4"
      required="required"
      className="product-quantity-selector"
      value={quantity}
      onChange={input}
    />
    <button
      type="button"
      value="inc"
      onClick={click}
    >
      <i className="fas fa-plus-circle quantity-icon" data-val="inc" />
    </button>
  </div>
);

CheckoutQuantity.propTypes = {
  click: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CheckoutQuantity;
