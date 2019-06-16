/* eslint-disable class-methods-use-this */
import React from 'react';
import Checkout from '../shared/components/checkout';

const dummyProduct = {
  productName: 'La Sportiva Tarantulace',
  companyName: 'La Sportiva',
  itemNumber: 830932,
  color: 'Flame',
  thumbnailUrl: 1,
  price: '80.00',
  rating: '4.3',
  noRatings: 166,
  shoeSizes: ['42', '43', '44', '45'],
};

class MockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [dummyProduct, dummyProduct],
      product: dummyProduct,
      size: null,
      quantity: 1,
      activeImage: dummyProduct,
      carouselPosition: 0,
      mousePosition: {
        x: 0,
        y: 0,
      },
      activeColor: 'flame',
      shippingOption: 'ship',
    };
  }

  notMockFn() {
    return console.log('SPYDARS TALKING TO CATS');
  }

  render() {
    const checkoutHandlers = {
      shoeSizeSelect: this.notMockFn,
      handleQuantityClick: this.notMockFn,
      handleQuantityInput: this.notMockFn,
      handleShippingInput: this.notMockFn,
      handleColorSelect: this.notMockFn,
    };
    const mediaHandlers = {
      handleImageClick: this.notMockFn,
      handleCarouselPos: this.notMockFn,
      handleZoom: this.notMockFn,
    };

    const {
      images, activeColor, activeImage, product, quantity, shippingOption, carouselPosition, mousePosition,
    } = this.state;
    return (
      <div>
        {/* <MediaWrapper
          images={images.filter(img => img.color === activeColor && img.size === 'thumb')}
          active={activeImage}
          handlers={mediaHandlers}
          carouselPosition={carouselPosition}
          mousePosition={mousePosition}
        /> */}
        <Checkout
          product={product}
          handlers={checkoutHandlers}
          quantity={quantity}
          images={images.filter(img => img.size === 'select')}
          shippingOption={shippingOption}
          activeColor={activeColor}
        />
      </div>
    );
  }
}
export default MockApp;
