import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE, NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { fromJS } from 'immutable';

const initialState = fromJS({
  notifications: {},
  filter: NotificationTypeFilters.DEFAULT,
  loading: false, // Added loading attribute to the initial state
});

function notificationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(fromJS({ notifications: normalizedData.entities.notifications }));
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading); // Added SET_LOADING_STATE case
    default:
      return state;
  }
}

export default notificationReducer;
