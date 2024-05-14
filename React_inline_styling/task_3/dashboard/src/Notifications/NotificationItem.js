import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  listDefault: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'blue',
  },
  listUrgent: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'red',
  },
  listHtml: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.9rem',
    color: 'red',
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;
    const priorityType = type === 'urgent' ? styles.listUrgent : styles.listDefault;

    return html ? (
      <li className={css(styles.listHtml)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
    ) : (
      <li className={css(priorityType)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
