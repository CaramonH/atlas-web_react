// Import the JSON data
import * as notificationsData from './notifications.json';

// Function to get all notifications by user ID
export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author.id === userId)
                                  .map(notification => notification.context);
}