/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../client/components/imageSubComponents/carousel';

const mockImages = [{
  color: 'flame',
  id: 28,
  orientation: 'inuse_3',
  size: 'thumb',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_3_thumb.jpg',
}, {
  color: 'flame',
  id: 28,
  orientation: 'outside',
  size: 'thumb',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_3_thumb.jpg',
}];

describe('rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Carousel images={mockImages} handler={() => {}} />);
    expect(wrap.exists()).toBe(true);
  });
});
