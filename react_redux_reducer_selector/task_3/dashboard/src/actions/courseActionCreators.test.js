import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('Action creators', () => {
  it('selectCourse should return the correct action', () => {
    const expectedAction = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(expectedAction);
  });

  it('unSelectCourse should return the correct action', () => {
    const expectedAction = { type: UNSELECT_COURSE, index: 1 };
    expect(unSelectCourse(1)).toEqual(expectedAction);
  });
});