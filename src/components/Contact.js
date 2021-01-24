import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" 
            src={props.avatar}
            alt="avatar"/>
            <div className="name">
                {props.name}                
                <div className="status">
                    <div className={props.online ? "status-online" : "status-offline"}></div>
                    <div className="status-text">{props.online ? "oneline" : "offline"}</div>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool,
}

export default Contact;