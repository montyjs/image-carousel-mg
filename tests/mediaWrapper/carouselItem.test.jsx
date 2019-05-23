/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../client/components/imageSubComponents/carouselItem';

const mockImage = {
  color: 'flame',
  id: 28,
  orientation: 'inuse_3',
  size: 'full',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_3_thumb.jpg',
};

describe('rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Item {...mockImage} handler={() => {}} />);
    expect(wrap.exists()).toBe(true);
  });
});
