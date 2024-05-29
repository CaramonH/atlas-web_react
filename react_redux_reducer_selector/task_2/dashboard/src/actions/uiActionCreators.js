import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

// Action creator for login
export const login = (email, password) => ({
  type: LOGIN,
  user: {
    email,
    password
  }
});

// Action creator for logout
export const logout = () => ({
  type: LOGOUT
});

// Action creator for displaying notification drawer
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

// Action creator for hiding notification drawer
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

// Action creator for login success
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

// Action creator for login failure
export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      // Dispatch the login action
      dispatch(login(email, password));

      //Perform API call
      const response = await fetch('/login-success.json');
      if(!response.ok) {
        throw new Error('Login failed');
      }

      //Dispatch loginSuccess when fetch is successful
      dispatch(loginSuccess());
    } catch (error) {
      // Dispatch loginFailure when the fetch fails
      dispatch(loginFailure());
    }
  };
};

// Higher-order function to bind UI action creators
export const bindUIActionCreators = (dispatch) => ({
  boundLogin: (email, password) => dispatch(login(email, password)),
  boundLogout: () => dispatch(logout()),
  boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer())
});
