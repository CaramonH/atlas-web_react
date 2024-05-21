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
  const userNotifications = normalizedData.entities.notifications
    .filter(notification => notification.author === userId)
    .map(notification => notification.context);

  return userNotifications.map(messageId => normalizedData.entities.messages[messageId]);
}