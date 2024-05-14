import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import { NotificationItemShape } from "./NotificationItemShape";
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  notifications: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    border: '3px dotted #00003C',
    marginRight: '.5rem',
    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
      padding: 0,
      margin: 0,
      overflowY: 'auto',
      border: 'none',
      zIndex: 10,
    },
  },

  notificationsParagraph: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    padding: '1.5rem 0 .3rem .8rem',
    margin: '0',
    fontSize: '.8rem',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '1rem 0',
    },
  },

  menuItem: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    marginRight: '1rem',
  },

  noMenuItem: {
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },

  notificationsUnorderedList: {
    paddingLeft: '2.3rem',
    '@media (max-width: 900px)': {
      listStyle: 'none',
      paddingLeft: 0,
      margin: 0,
      width: '100%',
    }
  },
})

class Notifications extends Component {

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const buttonStyle = {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '0'
    };
    const iconStyle = {
      width: '.8rem',
      height: '.8rem',
      margin: '0.5rem'
    };
    const handleButtonClick = () => {
      console.log("close button has been clicked");
    };

    const menuItemDisplay = displayDrawer ? css(styles.noMenuItem) : css(styles.menuItem);

    return (
      <>
        <div className={menuItemDisplay} data-testid="menuItem">
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} data-testid="notifications">
            <div className="Notifications-content">
              {listNotifications.length > 0 && (
                <p className={css(styles.notificationsParagraph)}>
                  Here is the list of notifications
                </p>
              )}
              <ul className={css(styles.notificationsUnorderedList)}>
                {listNotifications.length === 0 ? (
                  <NotificationItem value='No new notification for now' />
                ) : (
                  listNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))
                )}
              </ul>
            </div>
            <button
              aria-label="Close"
              style={buttonStyle}
              onClick={handleButtonClick}>
                <img src={closeIcon} alt="Close" style={iconStyle} />
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;