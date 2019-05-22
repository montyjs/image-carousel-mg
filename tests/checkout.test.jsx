/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../client/components/checkout';
import MockApp from './mockApp';

describe('Rendering Tests', () => {
  const wrapper = shallow(<Checkout />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should not be empty', () => {
    expect(wrapper.find('buy-wrapper')).toBeDefined();
  });
});

describe('When receiving props', () => {
  const wrapper = shallow(<MockApp />);
  it('should receive props', () => {
    expect(wrapper.props);
  });
  it('should destructure the props object', () => {
    expect(wrapper.props()).toHaveProperty('productName');
    expect(wrapper.prop('productName')).toEqual('La Sportiva Tarantulace');
    expect(wrapper.prop('companyName')).toEqual('La Sportiva');
    expect(wrapper.prop('itemNumber')).toEqual(830932);
    expect(wrapper.prop('color')).toEqual('Flame');
    expect(wrapper.prop('thumbnailUrl')).toEqual(1);
    expect(wrapper.prop('price')).toEqual('80.00');
    expect(wrapper.prop('rating')).toEqual('4.3');
    expect(wrapper.prop('noRatings')).toEqual(166);
  });

  // Shoe Size Select
  it('should display the props', () => {
    expect(wrapper.contains(<h1>La Sportiv Tarantulace</h1>));
  });
});

// Quantity Incrementer
// Should increment when increment button is clicked
// Should decrement when decrement button is clicked
// Users should be able to type a number into the field
// Should not be able to have less than 1 quantity
// Should update state when value is changed
// Shipping / Pick Up Radio Button
// Users can select pick up option
// Users can select ship option
// Users cannot select both options
// Users cannot select neither option
// Should update state when new option is selected
// Checkout
// Users can checkout when shoe size
// Users cannot checkout when shoe size is not selected
