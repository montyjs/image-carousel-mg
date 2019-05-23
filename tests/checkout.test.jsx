/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkout from '../client/components/checkout';
import MockApp from './mockApp';

describe('Rendering Tests', () => {
  const wrap = shallow(<Checkout />);
  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
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
