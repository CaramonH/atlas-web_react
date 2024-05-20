import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the right number of NotificationItem when listNotifications is passed', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
  });

  it('renders the text "Here is the list of notifications" only when listNotifications is not empty', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
  });

  it('displays "No new notification for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.contains('Here is the list of notifications')).toBe(false);
    expect(wrapper.containsMatchingElement(<NotificationItem value='No new notification for now' />)).toBe(true);
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="menuItem"]').length).toBe(1);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="notifications"]').length).toBe(0);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="menuItem"]').length).toBe(1);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="notifications"]').length).toBe(1);
  });

  it('calls markAsRead with the right message when a NotificationItem is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={[{ id: 1, type: 'default', value: 'New course available' }]} />);
    wrapper.find('NotificationItem').first().simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });

  it('does not rerender with the same listNotifications prop', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications });
    expect(shouldUpdate).toBe(false);
  });

  it('rerenders with a longer listNotifications prop', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const longerListNotifications = [
      ...listNotifications,
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: longerListNotifications });
    expect(shouldUpdate).toBe(true);
  });
})