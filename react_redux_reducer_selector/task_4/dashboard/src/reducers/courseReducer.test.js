import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const state = courseReducer(undefined, action);
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false }
      }
    });
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE action', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false }
      }
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action);
    expect(state.getIn(['courses', '1', 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: true },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false }
      }
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action);
    expect(state.getIn(['courses', '1', 'isSelected'])).toBe(false);
  });
});
