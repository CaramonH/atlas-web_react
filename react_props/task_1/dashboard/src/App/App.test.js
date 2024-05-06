import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Notifications } from "../Notifications/Notifications";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('contains the Header component', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contains the Login component', () => {
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('contains the Footer component', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
});
