import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utility functions', () => {
  test('getFullYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  test('getFooterCopy returns "Atlas School" when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Atlas School');
  });

  test('getFooterCopy returns "Atlas School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Atlas School main dashboard');
  });

  test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
