import courseReducer from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";

describe('courseReducer', () => {
  it('should return inital state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
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
    expect(state).toEqual(courses.map(course => ({ ...course, isSelected: false })));
  });

  it('should handle SELECT_COURSE action', () => {
    const initialState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false }
    ];
    const action = {
      type: 'SELECT_COURSE',
      index: 2
    };
    const state = courseReducer(initialState, action);
    expect(state).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true }
    ]);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const initialState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false }
    ];
    const action = {
      type: 'UNSELECT_COURSE',
      index: 2
    };
    const state = courseReducer(initialState, action);
    expect(state).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false }
    ]);
  });
});