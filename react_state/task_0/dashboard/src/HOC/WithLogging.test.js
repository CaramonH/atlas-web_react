import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  it('logs mount and unmount messages for a pure HTML component', () => {
    const ConsoleSpy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(() => <p />);

    const wrapper = mount(<WrappedComponent />);
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    ConsoleSpy.mockRestore();
  });

  it('logs mount and unmount messages for the Login component', () => {
    const ConsoleSpy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(Login);

    const wrapper = mount(<WrappedComponent />);
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    ConsoleSpy.mockRestore();
  });
});