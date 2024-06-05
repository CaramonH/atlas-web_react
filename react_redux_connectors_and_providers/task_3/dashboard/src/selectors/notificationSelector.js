import { Map } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

export const filterTypeSelected = (state) => state.toJS().filter;

export const getNotifications = (state) => {
    return Map(state.get('notifications'));
};

export const getUnreadNotifications = (state) => {
    const unreadNotifications = [];
    for (let i in state.toJS().notifications) {
        console.log(state.toJS().notifications[i]);
        if (state.toJS().notifications[i].isRead === false) {
            unreadNotifications.push(state.toJS().notifications[i]);
        }
    }
    return Map(notificationsNormalizer(unreadNotifications).entities.notifications);
};