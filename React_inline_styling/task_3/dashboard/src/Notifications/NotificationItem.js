import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  listDefault: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'blue',
    '@media (max-width: 900px)': {
      borderBottom: '3px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyleType: 'none',
      width: '100%',
    },
  },

  listUrgent: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'red',
    '@media (max-width: 900px)': {
      borderBottom: '3px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyleType: 'none',
      width: '100%',
    },
  },

  listHtml: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.9rem',
    color: 'red',
    '@media (max-width: 900px)': {
      borderBottom: '3px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyleType: 'none',
      width: '100%',
    },
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