import React, { Component } from "react";
import './Notifications.css';
import NotificationItem from "./NotificationItem";
import { NotificationItemShape } from "./NotificationItemShape";
import closeIcon from '../assets/close.png';
import PropTypes from 'prop-types';

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

    return (
      <>
        <div className="menuItem">
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <div className="Notifications-content">
              {listNotifications.length > 0 && (
                <p>
                  Here is the list of notifications
                </p>
              )}
              <ul>
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