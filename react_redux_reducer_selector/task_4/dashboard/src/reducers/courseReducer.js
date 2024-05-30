import { Map, fromJS } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: Map(),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and ensure it is converted to an immutable Map
      const normalizedData = coursesNormalizer(action.data);
      const coursesWithSelection = fromJS(normalizedData.entities.courses).map(course => course.set('isSelected', false));
      return state.mergeIn(['courses'], coursesWithSelection);

    case SELECT_COURSE:
      // Ensure action.index is treated as a string for consistency
      return state.setIn(['courses', String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      // Ensure action.index is treated as a string for consistency
      return state.setIn(['courses', String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
