import * as notifData from '../../dist/notifications.json';
import { schema, normalize } from 'normalizr';

// create entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the data outside of function
const normalizedData = normalize(notifData.default, [notification]);

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

// Get notifications by user id
const getAllNotificationsByUser = (userId) => {
  const userNotifications = [];

  // Iterate through all notification IDs
  for(const id of normalizedData.result) {
    // Get the notification by ID
    const notif = normalizedData.entities.notifications[id];

    // If the notification's author matches the given userId, add the context to the list
    if(notif.author === userId) {
      const message = normalizedData.entities.messages[notif.context]
      userNotifications.push({
        guid: message.guid,
        isRead: message.isRead,
        type: message.type,
        value: message.value
      });
    }
  }
  return userNotifications;
}

export { user, message, notification, getAllNotificationsByUser };