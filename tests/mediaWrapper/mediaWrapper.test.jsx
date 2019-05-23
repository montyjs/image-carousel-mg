/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MediaWrapper from '../../client/components/media-wrapper';

const mockImg = {
  color: 'flame',
  id: 28,
  orientation: 'inuse_3',
  size: 'full',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame/inuse_3_full.jpg',
};

describe('rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<MediaWrapper />);
    expect(wrap.exists()).toBe(true);
  });
});
