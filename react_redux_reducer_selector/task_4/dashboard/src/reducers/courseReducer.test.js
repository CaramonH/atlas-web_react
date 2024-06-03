import courseReducer from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { fromJS } from 'immutable';
import { courseNormalizer } from "../schema/courses";

describe('courseReducer', () => {
  it('should return inital state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(fromJS({
      courses: {}
    }));
  });

  it('should hand FETCH_COURSE_SUCCESS action', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const action = {
      type: 'FETCH_COURSE_SUCCESS',
      data: courses
    };
    const state = courseReducer(undefined, action);
    const normalizedCourses = courseNormalizer(courses);
    expect(fromJS(state.get('courses'))).toEqual(fromJS(normalizedCourses.entities.courses));
  });

  it('should handle SELECT_COURSE action', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const normalizedCourses = courseNormalizer(courses);
    const initialState = fromJS({
      courses: normalizedCourses.entities.courses
    });
    const action = {
      type: SELECT_COURSE,
      index: '2'
    };
    const state = courseReducer(initialState, action);
    expect(state.getIn(['courses', '2', 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40 }
    ];
    const normalizedCourses = courseNormalizer(courses);
    const initialState = fromJS({
      courses: normalizedCourses.entities.courses
    });
    const action = {
      type: UNSELECT_COURSE,
      index: '2'
    };
    const state = courseReducer(initialState, action);
    expect(state.getIn(['courses', '2', 'isSelected'])).toBe(false);
  });
});