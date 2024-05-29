import notificationReducer from "./notificationReducer";
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(fromJS({
      notifications: {},
      filter: NotificationTypeFilters.DEFAULT,
    }));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notificationsData = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData
    };
    const state = notificationReducer(undefined, action);
    const normalizedData = notificationsNormalizer(notificationsData);
    expect(fromJS(state.get('notifications'))).toEqual(fromJS(normalizedData.entities.notifications));
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = fromJS({
      notifications: { '1': { id: 1, isRead: false }, '2': { id: 2, isRead: false } },
      filter: NotificationTypeFilters.DEFAULT,
    });
    const action = {
      type: MARK_AS_READ,
      index: '1'
    };
    const state = notificationReducer(initialState, action);
    expect(state.getIn(['notifications', '1', 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    };
    const state = notificationReducer(undefined, action);
    expect(state.get('filter')).toBe(NotificationTypeFilters.URGENT);
  });
});