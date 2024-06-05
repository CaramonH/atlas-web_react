import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { Map } from 'immutable';
import { StyleSheetTestUtils } from 'aphrodite';

describe('App', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contains the Login component when not logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not render CourseList when user is not logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('renders CourseList component when user is logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('does not render Login component when user is logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('has displayDrawer state set to false by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.prop('displayDrawer')).toBe(false);
  });

  it('sets displayDrawer to true when calling handleDisplayDrawer', () => {
    const displayNotificationDrawerMock = jest.fn();
    const wrapper = shallow(<App displayNotificationDrawer={displayNotificationDrawerMock} />);
    expect(wrapper.prop('displayDrawer')).toBe(false);

    wrapper.instance().handleDisplayDrawer();
    expect(displayNotificationDrawerMock).toHaveBeenCalled();
  });

  it('sets displayDrawer to false when calling handleHideDrawer', () => {
    const hideNotificationDrawerMock = jest.fn();
    const wrapper = shallow(<App hideNotificationDrawer={hideNotificationDrawerMock} />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.prop('displayDrawer')).toBe(true);

    wrapper.instance().handleHideDrawer();
    expect(hideNotificationDrawerMock).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('returns the correct object when passing a state with isUserLoggedIn set to true', () => {
      const state = Map({ isUserLoggedIn: true });
      const expectedProps = { isLoggedIn: true };
      expect(mapStateToProps(state)).toEqual(expectedProps);
    });
  });
});
