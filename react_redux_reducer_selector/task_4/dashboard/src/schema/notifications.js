import * as notifData from '../../dist/notifications.json';
import { schema, normalize } from 'normalizr';

// Define schemas for user, message, and notification
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Function to normalize notifications data
export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

// Normalize the default data
const normalizedData = notificationsNormalizer(notifData.default);

// Get notifications by user id
const getAllNotificationsByUser = (userId) => {
  const userNotifications = [];

  // Iterate through all notification IDs
  for (const id of normalizedData.result) {
    // Get the notification by ID
    const notif = normalizedData.entities.notifications[id];

    // Check if the author's id matches the userId
    if (notif.author.id === userId) { // Assuming author is an object with an id field
      const message = normalizedData.entities.messages[notif.context];
      userNotifications.push({
        guid: message.guid,
        isRead: message.isRead,
        type: message.type,
        value: message.value
      });
    }
  }
  return userNotifications;
};

export { user, message, notification, getAllNotificationsByUser, normalizedData };
