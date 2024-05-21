import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
fetchMock.enableMocks();

describe('Async action creators', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when login is successful', () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when login fails', () => {
    fetchMock.mockResponseOnce('', { status: 404 });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('Action creators', () => {
  it(' creates a LOGIN action', () => {
    const email = 'test@example.com';
    const password = 'password123';

    const expectedAction = {
      type: 'LOGIN',
      user: { email, password },
    };

    expect(login(email, password)).toEqual(expectedAction);
  });

  it('creates a LOGOUT action', () => {
    const expectedAction = {
      type: 'LOGOUT',
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('creates a DISPLAY_NOTIFICATION_DRAWER action', () => {
    const expectedAction = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };

    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('creates a HIDE_NOTIFICATION_DRAWER action', () => {
    const expectedAction = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };

    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
})