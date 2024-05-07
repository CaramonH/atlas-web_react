import React from "react";
import './Notifications.css';
import NotificationItem from "./NotificationItem";
import closeIcon from '../assets/close.png';
import { getLatestNotification } from "../utils/utils";

export function Notifications() {

  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: '0'
  };

  const iconStyle = {
    width: '1rem',
    height: '1rem',
    margin: '0.5rem'
  };

  const handleButtonClick = () => {
    console.log("close button has been clicked");
  };

  return (
    <div className="Notifications">
      <div className="Notifications-content">
        <p>
          Here is the list of notifications
        </p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
      <button
        aria-label="Close"
        style={buttonStyle}
        onClick={handleButtonClick}>
          <img src={closeIcon} alt="Close" style={iconStyle} />
      </button>
    </div>
  );
}

export default Notifications;