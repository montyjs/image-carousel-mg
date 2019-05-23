import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './checkoutSubComponents/productInfo';
import ColorSelect from './checkoutSubComponents/colorSelect';
import ShoeSizeSelect from './checkoutSubComponents/shoeSizeSelect';
import CheckoutQuantity from './checkoutSubComponents/checkoutQuantity';
import ShippingOptions from './checkoutSubComponents/shippingOptions';
import BuyButtons from './checkoutSubComponents/buyButtons';

const Checkout = ({
  handlers, product, quantity, shippingOption,
}) => (
  <div className="checkout-wrapper">
    <ProductInfo {...product} />
    <ColorSelect color={product.color} />
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
  product: PropTypes.object,
  handlers: PropTypes.object,
  quantity: PropTypes.number,
  shippingOption: PropTypes.string,
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
  },
  quantity: 1,
  shippingOption: 'ship',
};

export default Checkout;
