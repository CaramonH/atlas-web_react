// src/actions/uiActionCreators.test.js

import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
  
  // Test for login action creator
  it('login action creator returns the correct action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: {
        email,
        password
      }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  // Test for logout action creator
  it('logout action creator returns the correct action', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  // Test for displayNotificationDrawer action creator
  it('displayNotificationDrawer action creator returns the correct action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  // Test for hideNotificationDrawer action creator
  it('hideNotificationDrawer action creator returns the correct action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

});
