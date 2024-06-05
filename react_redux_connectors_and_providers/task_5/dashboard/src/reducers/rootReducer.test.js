import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
