import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders three list items', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
