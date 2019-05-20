/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../client/components/checkout';

const dummyProduct = {
  product_name: 'La Sportiva Tarantulace',
  company_name: 'La Sportiva',
  item_number: 830932,
  color: 'Flame',
  thumbnail_url: 1,
  price: 80.00,
  rating: 4.3,
  no_ratings: 166,
};
const wrapper = shallow(<Checkout product={dummyProduct} />);

describe('Rendering Tests', () => {
  it('renders without crashing', () => {
    wrapper;
  });
});

describe('When receiving props', () => {
  it('should receive props', () => {
    console.log(wrapper.props());
    wrapper.setProps(dummyProduct);
    expect(wrapper.props()).toHaveProperty(product);
  });
});
