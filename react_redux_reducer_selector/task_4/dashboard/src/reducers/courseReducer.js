import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";

// Initial state is an empty array
const initialState = [];

// Reducer function to handle course-related actions
function courseReducer(state = initialState, action) {
  switch(action.type) {
    // Handle the FETCH_COURSE_SUCCESS action to populate the state with courses and set isSelected to false
    case FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({ ...course, isSelected: false }));
    
    // Handle the SELECT_COURSE action to mark a specific course as selected based on its id
    case SELECT_COURSE:
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );

    // Handle the UNSELECT_COURSE action to mark a specific course as unselected based on its id
    case UNSELECT_COURSE:
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );
    
    // Return the current state for any other action types
    default:
      return state;
  }
}

export default courseReducer;
