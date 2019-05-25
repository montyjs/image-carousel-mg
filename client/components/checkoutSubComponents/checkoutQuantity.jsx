/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CheckoutQuantity = ({ click, input, quantity }) => (
  <div className="checkout-quantity">
    <p>Quantity</p>
    <div className="row">
      <button
        type="button"
        name="decrement"
        onClick={click}
      >
        <i className="fas fa-minus" />
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
        name="increment"
        onClick={click}
      >
        <i className="fas fa-plus" />
      </button>
    </div>
  </div>
);

CheckoutQuantity.propTypes = {
  click: PropTypes.func.isRequired,
  input: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CheckoutQuantity;
