// Import action types from actions/uiActionTypes
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Initial state for the UI reducer
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

// UI reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      };
    default:
      return state;
  }
};

export default uiReducer;
