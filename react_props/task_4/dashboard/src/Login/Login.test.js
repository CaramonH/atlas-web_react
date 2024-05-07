import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
  });

  it('renders 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toBe(2);
  });
});
