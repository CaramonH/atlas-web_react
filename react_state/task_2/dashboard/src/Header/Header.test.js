import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import UserContext from '../App/AppContext';

describe('Header', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    jest.clearAllMocks();
});

  it('renders without crashing', () => {
    shallow(
      <UserContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </UserContext.Provider>
    );
  });

  it('renders h1 tag', () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </UserContext.Provider>
    );
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('renders img tag', () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </UserContext.Provider>
    );
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('mounts with a default context value and does not show the logoutSection', () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </UserContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
});

it('mounts with a user logged in and shows the logoutSection', () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' } }}>
        <Header />
      </UserContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
});

it('calls the logOut function when the logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' }, logOut: logOutSpy }}>
        <Header />
      </UserContext.Provider>
    );
    wrapper.find('button').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
});
})