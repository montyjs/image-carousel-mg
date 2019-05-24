/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorSelect from '../../client/components/checkoutSubComponents/colorSelect';

const mockImages = [{
  color: 'red',
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

describe('rendering', () => {
  const wrap = shallow(<ColorSelect
    color="red"
    handler={() => {}}
    images={mockImages}
  />);
  wrap.update();
  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('should render two thumbnails', () => {
    expect(wrap.find('img')).toHaveLength(2);
  });

  it('should render one active image wrapper', () => {
    expect((wrap.find('.active'))).toHaveLength(1);
  });
});

describe('should call a function when clicked', () => {
  const mockFn = jest.fn();
  const wrap = mount(<ColorSelect
    color="red"
    handler={mockFn}
    images={mockImages}
  />);
  wrap.update();
  wrap.find('img').at(0).simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
