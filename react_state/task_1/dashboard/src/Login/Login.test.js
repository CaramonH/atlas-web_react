import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('renders 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toEqual(2);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(true);
  });

  it('submit button is enabled when both email and password are provided', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    emailInput.simulate('change', { target: { value: 'user@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(false);
  });
});
