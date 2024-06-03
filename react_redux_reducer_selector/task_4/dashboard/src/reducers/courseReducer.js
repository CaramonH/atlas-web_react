import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

// Initial state
const initialState = Map();

// Course reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data
      const normalizedData = coursesNormalizer(action.data);
      // Merge normalized data with the state
      return state.merge(normalizedData.entities.courses);

    case SELECT_COURSE:
      // Update the selected property to true
      return state.setIn([action.courseId, 'isSelected'], true);

    case UNSELECT_COURSE:
      // Update the selected property to false
      return state.setIn([action.courseId, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;

