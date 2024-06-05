import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  }
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  }
}

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: { error }
  }
}

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
      dispatch(loginSuccess({ email, password }));
    } catch (error) {
      // Dispatch loginFailure when the fetch fails
      dispatch(loginFailure(error.toString()));
    }
  };
};