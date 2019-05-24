/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Carousel from '../../client/components/imageSubComponents/carousel';

const mockImages = [{
  color: 'flame',
  id: 28,
  orientation: 'inuse_3',
  size: 'thumb',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_3_thumb.jpg',
}, {
  color: 'flame',
  id: 29,
  orientation: 'outside',
  size: 'thumb',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_3_thumb.jpg',
}];
const handlers = {
  handleImageClick: () => {},
  handleCarouselPos: () => {},
  handleZoom: () => {},
};

describe('Rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Carousel images={mockImages} handlers={handlers} />);
    expect(wrap.exists()).toBe(true);
  });
  it('should render two thumbnails', () => {
    const wrap = mount(<Carousel images={mockImages} handlers={handlers} />);
    expect(wrap.find('img')).toHaveLength(2);
  });
});
