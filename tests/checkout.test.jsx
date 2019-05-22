/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import PropTypes from 'prop-types';
import Checkout from '../client/components/checkout';
import ShoeSizeSelect from '../client/components/checkoutSubComponents/shoeSizeSelect';

describe('Rendering Tests', () => {
  const wrapper = shallow(<Checkout />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should not be empty', () => {
    expect(wrapper.find('buy-wrapper')).toBeDefined();
  });
});

const dummyProduct = {
  productName: 'La Sportiva Tarantulace',
  companyName: 'La Sportiva',
  itemNumber: 830932,
  color: 'Flame',
  thumbnailUrl: 1,
  price: '80.00',
  rating: '4.3',
  noRatings: 166,
  shoeSizes: [42, 43, 44, 45],
};

class MockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      product: dummyProduct,
      size: null,
    };
  }

  render() {
    const notMockFn = () => console.log('stupid science bitch cant make i more smarter');
    const mock = notMockFn;
    const handlers = {
      shoeSizeSelect: mock,
    };
    const { product } = this.state;
    return (
      <Checkout
        {...product}
        handlers={handlers}
      />
    );
  }
}

describe('When receiving props', () => {
  const wrapper = shallow(<MockApp />);
  it('should receive props', () => {
    expect(wrapper.props);
  });
  it('should destructure the props object', () => {
    expect(wrapper.props()).toHaveProperty('productName');
    expect(wrapper.prop('productName')).toEqual('La Sportiva Tarantulace');
    expect(wrapper.prop('companyName')).toEqual('La Sportiva');
    expect(wrapper.prop('itemNumber')).toEqual(830932);
    expect(wrapper.prop('color')).toEqual('Flame');
    expect(wrapper.prop('thumbnailUrl')).toEqual(1);
    expect(wrapper.prop('price')).toEqual('80.00');
    expect(wrapper.prop('rating')).toEqual('4.3');
    expect(wrapper.prop('noRatings')).toEqual(166);
  });

  // Shoe Size Select
  it('should display the props', () => {
    expect(wrapper.contains(<h1>La Sportiv Tarantulace</h1>));
  });
});

describe('Shoe Size Select', () => {
  it('should receive shoe sizes', () => {
    const wrap = shallow(<MockApp />);
    expect(wrap.props()).toHaveProperty('shoeSizes');
    expect(wrap.props('shoeSizes').shoeSizes).toHaveLength(4);
  });

  it('should render shoe size options', () => {
    const wrap = shallow(<MockApp />);
    expect(wrap.contains(<option value="42" key="42eu">42 Eu</option>));
  });

  it('should call a function onChange', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<ShoeSizeSelect
      handler={mockFn}
      shoeSizes={dummyProduct.shoeSizes}
    />);
    wrap.find('select').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});

// Quantity Incrementer
// Should increment when increment button is clicked
// Should decrement when decrement button is clicked
// Users should be able to type a number into the field
// Should not be able to have less than 1 quantity
// Should update state when value is changed
// Shipping / Pick Up Radio Button
// Users can select pick up option
// Users can select ship option
// Users cannot select both options
// Users cannot select neither option
// Should update state when new option is selected
// Checkout
// Users can checkout when shoe size
// Users cannot checkout when shoe size is not selected
