/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import ShoeSizeSelect from '../../shared/components/checkoutSubComponents/shoeSizeSelect';
import MockApp from '../mockApp';


describe('rendering', () => {
  it('renders without crashing', () => {
    const wrap = mount(<MockApp />);
    expect(wrap.exists()).toBe(true);
  });
});

describe('Shoe Size Select', () => {
  it('should receive shoe sizes', () => {
    const wrap = mount(<MockApp />);
    expect(wrap.find('ShoeSizeSelect').props()).toHaveProperty('shoeSizes');
    expect(wrap.find('ShoeSizeSelect').props('shoeSizes').shoeSizes).toHaveLength(4);
  });

  it('should render shoe size options', () => {
    const wrap = shallow(<MockApp />);
    expect(wrap.contains(<option value="42" key="42eu">42 Eu</option>));
  });

  it('should call a function onChange', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<ShoeSizeSelect
      handler={mockFn}
      shoeSizes={['1', '2', '3', '4']}
    />);
    wrap.find('select').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});
