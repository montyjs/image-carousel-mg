import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './checkoutSubComponents/productInfo';
import ColorSelect from './checkoutSubComponents/colorSelect';
import ShoeSizeSelect from './checkoutSubComponents/shoeSizeSelect';
import CheckoutQuantity from './checkoutSubComponents/checkoutQuantity';
import ShippingOptions from './checkoutSubComponents/shippingOptions';
import BuyButtons from './checkoutSubComponents/buyButtons';

const Checkout = ({
  handlers, product, quantity, shippingOption, activeColor, images,
}) => (
  <div className="checkout-wrapper">
    <ProductInfo {...product} />
    <ColorSelect
      color={activeColor}
      images={images}
      handler={handlers.handleColorSelect}
    />
    <div className="user-selection-row">
      <ShoeSizeSelect
        shoeSizes={product.shoeSizes}
        handler={handlers.shoeSizeSelect}
      />
      <CheckoutQuantity
        click={handlers.handleQuantityClick}
        input={handlers.handleQuantityInput}
        quantity={quantity}
      />
    </div>
    <hr />
    <ShippingOptions handler={handlers.handleShippingInput} option={shippingOption} />
    <BuyButtons />
  </div>
);

Checkout.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string,
    companyName: PropTypes.string,
    itemNumber: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.string,
    noRatings: PropTypes.number,
    shoeSizes: PropTypes.arrayOf(PropTypes.string),
  }),
  handlers: PropTypes.shape({
    shoeSizeSelect: PropTypes.func,
    handleQuantityClick: PropTypes.func,
    handleQuantityInput: PropTypes.func,
    handleShippingInput: PropTypes.func,
    handleColorSelect: PropTypes.func,

  }),
  quantity: PropTypes.number,
  shippingOption: PropTypes.string,
  activeColor: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
};

Checkout.defaultProps = {
  product: {
    productName: '',
    companyName: '',
    itemNumber: 0,
    color: '',
    price: '0.00',
    rating: '0',
    noRatings: 0,
    shoeSizes: [],
  },
  handlers: {
    shoeSizeSelect: () => {},
    handleQuantityClick: () => {},
    handleQuantityInput: () => {},
    handleShippingInput: () => {},
    handleColorSelect: () => {},
  },
  quantity: 1,
  shippingOption: 'ship',
  images: [{}],
};

export default Checkout;
