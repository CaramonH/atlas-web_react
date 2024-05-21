import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Function to get all notifications by user ID
export function getAllNotificationsByUser(userId) {
  const normalizedData = normalize(notificationsData.default, [notification]);
  const userNotifications = Object.values(normalizedData.entities.notifications)
    .filter(notification => notification.author === userId)
    .flatMap(notification => {
      const messageId = notification.context;
      const message = normalizedData.entities.messages[messageId];
      return { ...message, id: notification.id };
    });

  return userNotifications;
}