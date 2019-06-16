/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Carousel from '../../shared/components/imageSubComponents/carousel';

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

const handlers = (func = () => {}) => ({
  handleImageClick: func,
  handleCarouselPos: func,
  handleZoom: func,
});

describe('Rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Carousel
      images={mockImages}
      handlers={handlers()}
      carouselPosition={0}
    />);
    expect(wrap.exists()).toBe(true);
  });

  it('should render two thumbnails', () => {
    const wrap = mount(<Carousel
      images={mockImages}
      handlers={handlers()}
      carouselPosition={0}
    />);
    expect(wrap.find('img')).toHaveLength(2);
  });
});

describe('Carousel Navigation Arrows', () => {
  it('should exist', () => {
    const wrap = shallow(<Carousel
      images={mockImages}
      handlers={handlers()}
      carouselPosition={0}
    />);
    expect(wrap.find('button')).toHaveLength(2);
  });

  it('should call a function when the left arrow is clicked', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<Carousel
      images={mockImages}
      handlers={handlers(mockFn)}
      carouselPosition={0}
    />);
    wrap.find('button').at(0).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call a function when the left arrow is clicked', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<Carousel
      images={mockImages}
      handlers={handlers(mockFn)}
      carouselPosition={0}
    />);
    wrap.find('button').at(1).simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
