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
})