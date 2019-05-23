/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../client/components/checkout';

describe('Rendering Tests', () => {
  const wrap = shallow(<Checkout />);
  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });
});
