import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

const initialState = {
  notifications: [],
  filter: "DEFAULT"
};

function notificationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Set isRead to false for each notification received
      const notifications = action.data.map(notification => ({ ...notification, isRead: false }));
      return { ...state, notifications };
    
    case MARK_AS_READ:
      // Mark a specific notification as read based on its index
      const markedNotificationIndex = action.index;
      const updatedNotifications = state.notifications.map(notification =>
        notification.id === markedNotificationIndex ? { ...notification, isRead: true } : notification
      );
      return { ...state, notifications: updatedNotifications };
    
    case SET_TYPE_FILTER:
      // Update the filter attribute based on the filter sent in the action
      return { ...state, filter: action.filter };
    
    default:
      return state;
  }
}

export default notificationReducer;
