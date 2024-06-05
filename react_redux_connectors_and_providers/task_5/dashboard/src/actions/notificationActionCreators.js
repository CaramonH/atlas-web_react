import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

// Action creator for setting loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

// Action creator for setting notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: notifications,
});

// Action creator for fetching notifications
export const fetchNotifications = () => {
  return async (dispatch) => {
    // Set loading state to true
    dispatch(setLoadingState(true));
    
    try {
      // Simulate fetching data from an API endpoint (e.g., /notifications.json)
      const response = await fetch('/notifications.json');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json();
      
      // Dispatch action to set notifications
      dispatch(setNotifications(data));
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      // Set loading state to false
      dispatch(setLoadingState(false));
    }
  };
};
