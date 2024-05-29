import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT'
  };

  it('should return the initial state when no action is passed', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notificationData = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationData
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: notificationData.map(notification => ({ ...notification, isRead: false }))
    };
    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const action = {
      type: MARK_AS_READ,
      index: 2
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    const expectedState = {
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
