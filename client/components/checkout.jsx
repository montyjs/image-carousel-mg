import React from 'react';
import PropTypes from 'prop-types';

const Checkout = ({
  productName, companyName, itemNumber, color, thumbnailUrl, price, rating, noRatings,
}) => (
  <div className="buy-wrapper">
    <button type="button" onClick={() => props.fetchProducts()}>
      Console Log Products
    </button>
    <button type="button" onClick={() => props.fetchImages()}>
    Console Log Images
    </button>
    { productName }
  </div>
);

Checkout.propTypes = {
  productName: PropTypes.string,
  companyName: PropTypes.string,
  itemNumber: PropTypes.number,
  color: PropTypes.string,
  thumbnailUrl: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
  noRatings: PropTypes.number,
};

Checkout.defaultProps = {
  productName: 'La Sportiva Tarantulace',
  companyName: 'La Sportiva',
  itemNumber: 830932,
  color: 'Flame',
  thumbnailUrl: 1,
  price: 80.00,
  rating: 4.3,
  noRatings: 166,
};

export default Checkout;
