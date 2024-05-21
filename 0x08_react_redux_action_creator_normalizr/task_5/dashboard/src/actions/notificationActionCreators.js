//notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action creator for marking notification as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

// Action creator for setting notification filter
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}
