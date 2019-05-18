/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../client/components/checkout';

const wrapper = shallow(<Checkout />);

describe('Rendering Tests', () => {
  it('renders without crashing', () => {
    wrapper;
  });
});
