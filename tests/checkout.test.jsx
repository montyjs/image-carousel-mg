/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import Checkout from '../client/components/checkout';

const dummyProduct = {
  productName: 'La Sportiva Tarantulace',
  companyName: 'La Sportiva',
  itemNumber: 830932,
  color: 'Flame',
  thumbnailUrl: 1,
  price: 80.00,
  rating: 4.3,
  noRatings: 166,
};

function MockApp(props) {
  const { product } = props;
  return (
    <Checkout {...product} />
  );
}
MockApp.propTypes = {
  product: PropTypes.object.isRequired,
};

describe('Rendering Tests', () => {
  const wrapper = shallow(<Checkout />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should not be empty', () => {
    expect(wrapper.find('buy-wrapper')).toBeDefined();
  });
});

describe('When receiving props', () => {
  const wrapper = shallow(<MockApp product={dummyProduct} />);
  it('should receive props', () => {
    expect(wrapper.props);
  });
  it('should destructure the props object', () => {
    expect(wrapper.props()).toHaveProperty('productName');
    expect(wrapper.prop('productName')).toEqual('La Sportiva Tarantulace');
  });
});
