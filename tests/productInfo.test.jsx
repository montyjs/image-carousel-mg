/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from '../client/components/checkoutSubComponents/productInfo';

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

describe('rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<ProductInfo {...dummyProduct} />);
    expect(wrap.exists()).toBe(true);
  });
});

describe('Product Info receiving props from Checkout', () => {
  const Mock = props => (<ProductInfo {...props.product} />);
  const wrap = shallow(<Mock product={dummyProduct} />);

  it('should receive props', () => {
    wrap.update();
    expect(wrap.props);
  });

  it('should destructure the props object', () => {
    wrap.update();
    expect(wrap.prop('productName')).toEqual('La Sportiva Tarantulace');
    expect(wrap.prop('companyName')).toEqual('La Sportiva');
    expect(wrap.prop('itemNumber')).toEqual(830932);
    expect(wrap.prop('color')).toEqual('Flame');
    expect(wrap.prop('thumbnailUrl')).toEqual(1);
    expect(wrap.prop('price')).toEqual('80.00');
    expect(wrap.prop('rating')).toEqual('4.3');
    expect(wrap.prop('noRatings')).toEqual(166);
  });

  // Shoe Size Select
  it('should display the props', () => {
    wrap.update();
    expect(wrap.contains(<h1>La Sportiv Tarantulace</h1>));
  });
});
