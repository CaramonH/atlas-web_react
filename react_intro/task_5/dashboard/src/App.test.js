import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders a div with the class App-header', () => {
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  test('renders a div with the class App-body', () => {
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  test('renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});
