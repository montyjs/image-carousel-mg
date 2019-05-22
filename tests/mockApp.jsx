/* eslint-disable class-methods-use-this */
import React from 'react';
import Checkout from '../client/components/checkout';

const dummyProduct = {
  productName: 'La Sportiva Tarantulace',
  companyName: 'La Sportiva',
  itemNumber: 830932,
  color: 'Flame',
  thumbnailUrl: 1,
  price: '80.00',
  rating: '4.3',
  noRatings: 166,
  shoeSizes: [42, 43, 44, 45],
};


class MockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      product: dummyProduct,
      size: null,
      quantity: 1,
    };
  }

  notMockFn() {
    return console.log('SPYDARS TALKING TO CATS');
  }

  render() {
    const handlers = {
      shoeSizeSelect: this.notMockFn,
      handleQuantityClick: this.notMockFn,
      handleQuantityInput: this.notMockFn,
    };
    const { product, quantity } = this.state;
    return (
      <Checkout
        product={product}
        handlers={handlers}
        quantity={quantity}
      />
    );
  }
}

export default MockApp;
