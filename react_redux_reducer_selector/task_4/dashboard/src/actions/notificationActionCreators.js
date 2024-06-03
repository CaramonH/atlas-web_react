import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

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

export const fetchNotificationsSuccess = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
});

// Higher-order function to bind action creators
export const bindNotificationActionCreators = (dispatch) => ({
  boundMarkAsRead: (index) => dispatch(markAsRead(index)),
  boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
});
