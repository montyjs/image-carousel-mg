/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ZoomCursor from '../../shared/components/imageSubComponents/zoomCursor';

const url = 'https://coubsecure-s.akamaihd.net/get/b64/p/coub/simple/cw_timeline_pic/8fdc7405645/40f2f0d0a25e05177fecf/big_1471495818_image.jpg';
const mousePos = {
  x: 0,
  y: 0,
};

describe('Rendering', () => {
  const wrap = shallow(<ZoomCursor url={url} mousePosition={mousePos} />);
  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });
  it('should have a span element', () => {
    expect(wrap.find('img')).toHaveLength(1);
  });
});

describe('No Display', () => {
  const wrap = mount(<ZoomCursor url={url} mousePosition={mousePos} />);
  it('display should be none by default', () => {
    expect(wrap.getDOMNode().style.display).toBe('none');
  });
});
