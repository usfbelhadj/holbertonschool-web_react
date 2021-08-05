
import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  id: PropTypes.number,
}
NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  id: 0,
};

function NotificationItem({ type, html, value, id, markAsRead}) {
  if (type && value) {
      return <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>;
  }
  return <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
}

export default NotificationItem;