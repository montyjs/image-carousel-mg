import React from 'react';
import PropTypes from 'prop-types';

const Checkout = ({
  productName, companyName, itemNumber, color, thumbnailUrl, price, rating, noRatings,
}) => (
  <div className="buy-wrapper">
    <div className="company">
      <a href="https://rei.com">
        { companyName }
      </a>
    </div>
    <div>
      { productName }
    </div>
    <div>
      { itemNumber }
    </div>
    <div>
      { color }
    </div>
    <div>
      { thumbnailUrl }
    </div>
    <div>
      { price }
    </div>
    <div>
      { rating }
    </div>
    <div>
      { noRatings }
    </div>
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
