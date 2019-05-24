/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import MockApp from '../mockApp';
import ColorSelect from '../../client/components/checkoutSubComponents/colorSelect';

const dummyProduct = {
  productName: 'La Sportiva Tarantulace',
  companyName: 'La Sportiva',
  itemNumber: 830932,
  color: 'Flame',
  thumbnailUrl: 1,
  price: '80.00',
  rating: '4.3',
  noRatings: 166,
  shoeSizes: [42, 43, 44, 45],
};

describe('rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<ColorSelect
      color="red"
      handler={() => {}}
      images={[dummyProduct, dummyProduct]}
    />);
    expect(wrap.exists()).toBe(true);
  });
});
