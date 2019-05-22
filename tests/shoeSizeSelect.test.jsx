/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ShoeSizeSelect from '../client/components/checkoutSubComponents/shoeSizeSelect';
import MockApp from './mockApp';

describe('Shoe Size Select', () => {
  it('should receive shoe sizes', () => {
    const wrap = shallow(<MockApp />);
    expect(wrap.props()).toHaveProperty('shoeSizes');
    expect(wrap.props('shoeSizes').shoeSizes).toHaveLength(4);
  });

  it('should render shoe size options', () => {
    const wrap = shallow(<MockApp />);
    expect(wrap.contains(<option value="42" key="42eu">42 Eu</option>));
  });

  it('should call a function onChange', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<ShoeSizeSelect
      handler={mockFn}
      shoeSizes={[1, 2, 3, 4]}
    />);
    wrap.find('select').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});
