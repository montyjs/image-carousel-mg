import React from 'react';
import PropTypes from 'prop-types';

const Checkout = props => (
  <div className="buy-wrapper">
    <button type="button" onClick={() => props.fetchProducts()}>
      Console Log Products
    </button>
    <button type="button" onClick={() => props.fetchImages()}>
    Console Log Images
    </button>
  </div>
);

Checkout.propTypes = {
  fetchProducts: PropTypes.func,
  fetchImages: PropTypes.func,
};

Checkout.defaultProps = {
  fetchProducts: () => console.log('click!'),
  fetchImages: () => console.log('click!'),
};

export default Checkout;
