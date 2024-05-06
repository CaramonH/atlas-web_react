import React from 'react';


function NotificationItem({ type, html, value }) {
  // If html is provided, render a div with dangerouslySetInnerHTML,
  // otherwise, render a span with the text value
  const listItemContent = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return listItemContent;
}

export default NotificationItem