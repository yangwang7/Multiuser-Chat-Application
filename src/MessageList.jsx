import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message, index) => {
          return(
            <li key={message.id}>
              <div className="message">
                  <div className="sender-info">
                    <div className="username">{message.sender}</div>
                  </div>
                  <div className="message-info">
                    <div className="timestamp">{message.timestamp}</div>
                  </div>
                <div className="message-text">{message.text}</div>
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default MessageList;