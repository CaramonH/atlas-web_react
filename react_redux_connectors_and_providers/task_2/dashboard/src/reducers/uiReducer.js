import { Map } from 'immutable';
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN } from "../actions/uiActionTypes";

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null, // Initialize user as null
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true).set('user', action.user); // Set user from action
    case LOGIN_FAILURE:
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null); // Set user to null
    case LOGIN:
      // You can handle the login action separately if needed
      return state;
    default:
      return state;
  }
}

export default uiReducer;
