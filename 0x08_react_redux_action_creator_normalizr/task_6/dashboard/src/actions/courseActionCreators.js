import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { useDispatch } from 'react-redux';

// Action creators
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Higher-order function to bind action creators
export const bindCourseActionCreators = (dispatch) => ({
  boundSelectCourse: (index) => dispatch(selectCourse(index)),
  boundUnselectCourse: (index) => dispatch(unselectCourse(index))
});