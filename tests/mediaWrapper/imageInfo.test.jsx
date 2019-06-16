/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ImageInfo from '../../shared/components/imageSubComponents/imageInfo';

const mockImage = {
  color: 'flame',
  index: 0,
  orientation: 'inuse_3',
  count: 6,
};

describe('Rendering', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<ImageInfo {...mockImage} />);
    expect(wrap.exists()).toBe(true);
  });
  it('should have a span element', () => {
    const wrap = shallow(<ImageInfo {...mockImage} />);
    expect(wrap.find('span')).toHaveLength(1);
  });
});

describe('Display Props', () => {
  const wrap = shallow(<ImageInfo {...mockImage} />);
  it('should not render the index + 1 (no zero index)', () => {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    expect(wrap.contains(<p>Image 1 of 6 <span>Inuse view (flame)</span></p>)).toBe(true);
  });
  it('does not display underscores or numbers and capitalize the first letter of the orientation', () => {
    expect(wrap.contains(<span>Inuse view (flame)</span>)).toBe(true);
  });
});
