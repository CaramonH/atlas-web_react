import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer