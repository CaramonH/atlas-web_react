import { Map } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { courseNormalizer } from "../schema/courses";

const initialState = Map({
  courses: Map(),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and merge it with the state
      const normalizedData = courseNormalizer(action.data);
      return state.mergeIn(['courses'], normalizedData.entities.courses);

    case SELECT_COURSE:
      // Update the value of the item
      return state.setIn(['courses', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      // Update the value of the item
      return state.setIn(['courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;