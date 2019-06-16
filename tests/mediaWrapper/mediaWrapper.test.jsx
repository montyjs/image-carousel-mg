/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MediaWrapper from '../../shared/components/media-wrapper';

const mockImage = {
  color: 'flame',
  id: 28,
  orientation: 'inuse_3',
  size: 'full',
  url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame/inuse_3_full.jpg',
};

describe('Rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<MediaWrapper />);
    expect(wrap.exists()).toBe(true);
  });

  it('should render an image', () => {
    const wrap = shallow(<MediaWrapper activeImage={mockImage} />);
    expect(wrap.find('img')).toHaveLength(1);
    expect(wrap.contains('<img alt="flame from the inuse_3" src="https://s3-us-west-2.amazonaws.com/fec-rei/flame/inuse_3_full.jpg"></img>'));
  });
});

describe('Invoking Zoom Function', () => {
  it('should call a function when mouseenters activeImage', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<MediaWrapper
      activeImage={mockImage}
      handlers={{ handleZoom: mockFn }}
    />);
    wrap.find('img').simulate('mouseenter');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call a function when activeImage is focused', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<MediaWrapper
      activeImage={mockImage}
      handlers={{ handleZoom: mockFn }}
    />);
    wrap.find('img').simulate('focus');
    expect(mockFn).toHaveBeenCalled();
  });
});
