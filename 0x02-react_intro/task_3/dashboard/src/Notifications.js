import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils.js';

export const Notifications = () => {
    const handelClose = () => {
        console.log('Close button has been clicked')
    }
    const defaultPriority = () => {
        return {
            color: 'blue',
        }     
    }
    const urgentPriority = () => {
        return {
            color: 'red',
        }     
    }
    const buttonStyle = {
        float: 'right',
        };
    return <div className="Notifications">
        <button aria-label='close' style={buttonStyle} onClick={handelClose}>X</button>
        <p>Here is the list of notifications</p>
        <ul>
            <li style={defaultPriority()}>New course available</li>
            <li style={urgentPriority()}>New resume available</li>
            {getLatestNotification(urgentPriority())}
        </ul>
    </div>
}

export default Notifications;