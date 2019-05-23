/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CheckoutQuantity from '../client/components/checkoutSubComponents/checkoutQuantity';

describe('rendering', () => {
  const wrap = shallow(<CheckoutQuantity
    quantity={1}
    click={() => {}}
    input={() => {}}
  />);
  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });
});

describe('Increment and decrement buttons', () => {
  const mockFn = jest.fn();
  const wrap = shallow(<CheckoutQuantity
    quantity={1}
    click={mockFn}
    input={() => {}}
  />);

  it('should have an increment button', () => {
    expect(wrap.find('button').filterWhere(item => item.prop('name') === 'increment')).toHaveLength(1);
  });

  it('should have a decrement button', () => {
    expect(wrap.find('button').filterWhere(item => item.prop('name') === 'decrement')).toHaveLength(1);
  });

  it('should call a function when decrement is clicked', () => {
    wrap.find('button').at(0).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call a function when increment is clicked', () => {
    wrap.find('button').at(1).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});

describe('Input field', () => {
  const mockFn = jest.fn(e => wrap.setProps({ quantity: e.value }));
  const wrap = shallow(<CheckoutQuantity
    quantity={1}
    click={() => {}}
    input={mockFn}
  />);

  it('should have an input field', () => {
    expect(wrap.find('input')).toHaveLength(1);
  });

  it('should call a function onChange', () => {
    wrap.find('input').simulate('change', { value: 1 });
    expect(mockFn).toHaveBeenCalled();
  });

  it('should update the input value when input is given', () => {
    wrap.find('input').simulate('change', { value: 2 });
    expect(wrap.find('input').props('').value).toBe(2);
  });
});
