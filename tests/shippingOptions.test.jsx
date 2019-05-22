/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ShippingOptions from '../client/components/checkoutSubComponents/shipping-options';

const mockFn = jest.fn();
const wrap = shallow(<ShippingOptions
  handler={mockFn}
  option="ship"
/>);

it('renders without crashing', () => {
  expect(wrap.exists()).toBe(true);
});
