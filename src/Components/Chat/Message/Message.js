import React, { Component } from 'react';
import "./Message.css";

class Message extends Component {
    render() {
        return (
            <div className="message"> 
                <img src={this.props.userImage} alt="user profile pic" className="message__image"/>
                <div className="message__content">
                    <div className="message__content-header">
                        <p className="message__content-user">{this.props.user ? this.props.user : null} -</p>
                        <p className="message__content-timestamp">{this.props.timestamp ? this.props.timestamp.toDate().toString().substring(0, 25) : null}</p>
                    </div>
                    <p className="message__content-message">{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Message;

