import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { courseNormalizer } from "../schema/courses";
import { fromJS } from 'immutable';

const initialState = fromJS({
  courses: {},
});

function courseReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = courseNormalizer(action.data);
      return state.mergeDeep(fromJS({ courses: normalizedData.entities.courses }));
    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);
    default:
      return state;
  }
}

export default courseReducer;