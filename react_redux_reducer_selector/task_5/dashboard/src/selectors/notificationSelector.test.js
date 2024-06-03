import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import { Map } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

const state = Map({
  filter: "DEFAULT",
  notifications: notificationsNormalizer([
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]).entities.notifications
});

describe("tests the selectors from notificationSelector", () => {
  it("tests filterTypeSelected", () => {
    expect(filterTypeSelected(state)).toEqual("DEFAULT");
  });

  it("tests getNotifications", () => {
    expect(getNotifications(state)).toEqual(
      Map(notificationsNormalizer([
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]).entities.notifications)
    );
  });

  it("tests getUnreadNotifications", () => {
    expect(getUnreadNotifications(state)).toEqual(
      Map(notificationsNormalizer([
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]).entities.notifications)
    );
  });
});