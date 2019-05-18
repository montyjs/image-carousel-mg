import React from 'react';

const BuyWrapper = props => (
  <div className="buy-wrapper">
    <button type="button" onClick={() => props.fetchProducts()}>
      <p>
      Console Log Products
      </p>
    </button>
    <button type="button" onClick={() => props.fetchImages()}>
    Console Log Images
    </button>
  </div>
);

export default BuyWrapper;
