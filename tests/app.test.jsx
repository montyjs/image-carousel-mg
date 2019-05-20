/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import fetch from 'jest-fetch-mock';
import App from '../client/components/app';

global.fetch = fetch;
const wrapper = shallow(<App />);

describe('Rendering Tests', () => {
  it('renders without crashing', () => {
    expect(wrapper);
  });
});


/* The fetch methods are static methods.
  So, they are accessed without a shallow render.
*/
describe('Fetching Images Method', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should be a function', () => {
    expect(typeof App.fetchImages).toBe('function');
  });

  it('should have a response', () => {
    fetch.mockResponseOnce(JSON.stringify({ url: 'http://flextrek.co.eu/whipsnake.jpg' }));

    App.fetchImages().then((res) => {
      expect(res.url).toEqual('http://flextrek.co.eu/whipsnake.jpg');
    });
  });
});

describe('Fetching Products Method', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should be a function', () => {
    expect(typeof App.fetchProducts).toBe('function');
  });

  it('should have a response', () => {
    fetch.mockResponseOnce(JSON.stringify({ product_name: 'flextrek whipsnake' }));

    App.fetchProducts().then((res) => {
      expect(res.product_name).toEqual('flextrek whipsnake');
    });
  });
});
