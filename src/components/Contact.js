import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online,
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" 
                src={this.props.avatar}
                alt="avatar"/>
                <div className="name">
                    {this.props.name}                
                    <div 
                    className="status" 
                    onClick = {
                        event => {
                            const newConnexionState = !this.state.online;
                            this.setState({online: newConnexionState});
                        }
                    }>
                        <div className={this.state.online ? "status-online" : "status-offline"}></div>
                        <div className="status-text">{this.state.online ? "online" : "offline"}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool,
}

export default Contact;