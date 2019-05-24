/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ShippingOptions from '../../client/components/checkoutSubComponents/shippingOptions';

const mockFn = jest.fn();
const wrap = shallow(<ShippingOptions
  handler={mockFn}
  option="ship"
/>);

describe('rendering', () => {
  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });
  it('should have a button for shipping', () => {
    expect(wrap.find('input').filterWhere(el => el.prop('value') === 'ship')).toHaveLength(1);
  });
  it('should have a button for pickup', () => {
    expect(wrap.find('input').filterWhere(el => el.prop('value') === 'pickup')).toHaveLength(1);
  });
});

describe('Handling an input', () => {
  it('should call a function when input is changed', () => {
    wrap.find('input').at(1).simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});
