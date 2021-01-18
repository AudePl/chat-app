import React from 'react';
import './style.css';

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" 
            src="https://randomuser.me/api/portraits/men/77.jpg"
            alt="avatar"/>
            <div className="name">
                Warren Lawson
                
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">online</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;