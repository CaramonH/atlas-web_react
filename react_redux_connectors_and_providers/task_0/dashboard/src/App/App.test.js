import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('App', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
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
    wrapper.setState({ user: { isLoggedIn: false } });
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not render CourseList when user is not logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: false } });
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('renders CourseList component when user is logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('does not render Login component when user is logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('updates user state correctly when logIn is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
  });

  it('updates user state correctly when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);

    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  });

  it('removes the notification from listNotifications when markNotificationAsRead is called', () => {
    const wrapper = shallow(<App />);
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    wrapper.setState({ listNotifications: initialNotifications });

    wrapper.instance().markNotificationAsRead(2);
    const expectedNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    expect(wrapper.state('listNotifications')).toEqual(expectedNotifications);
  });
});

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    // create a simulated state using Immutable.js
    const state = fromJS({
      uiReducer: {
        isUserLoggedIn: true
      }
    });

    // Call mapStateToProps with the simulated state
    const componentState = mapStateToProps(state.toJS());

    // Define what you expect to receive
    const expectedState = {
      isLoggedIn: true
    };

    // Assert that mapStateToProps returns expected state
    expect(componentState).toEqual(expectedState);
  });
});