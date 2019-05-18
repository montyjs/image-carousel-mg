/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/app';

const wrapper = shallow(<App />);

describe('Rendering Tests', () => {
  it('renders without crashing', () => {
    wrapper;
  });
});

describe('Fetching Images Method', () => {
  it('should be a function', () => {
    const instance = wrapper.instance();
    expect(typeof instance.fetchImages).toBe('function');
  });
});

describe('Fetching Products Method', () => {
  it('should be a function', () => {
    const instance = wrapper.instance();
    expect(typeof instance.fetchProducts).toBe('function');
  });
});
