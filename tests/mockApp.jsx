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

  render() {
    const notMockFn = () => console.log('stupid science witch cant make i more smarter');
    const handlers = {
      shoeSizeSelect: notMockFn,
      handleQuantityClick: notMockFn,
      handleQuantityInput: notMockFn,
    };
    const { product, quantity } = this.state;
    return (
      <Checkout
        {...product}
        handlers={handlers}
        quantity={quantity}
      />
    );
  }
}

export default MockApp;
