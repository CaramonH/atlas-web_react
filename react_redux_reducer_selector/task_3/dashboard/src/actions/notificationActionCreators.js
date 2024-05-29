import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { useDispatch } from 'react-redux';

// Action creator for marking notification as read
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

// Action creator for setting notification filter
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Higher-order function to bind action creators
export const bindNotificationActionCreators = (dispatch) => ({
  boundMarkAsRead: (index) => dispatch(markAsRead(index)),
  boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
});
