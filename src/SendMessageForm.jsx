import React, { Component } from 'react';

class SendMessageForm extends Component {
  render() {
    return (
      <div className="send-message-form">
        <input className="to-send" name="text" value={this.props.sendText} onChange={this.props.onSendMessage} placeholder="Send messages here..." />
        <button className="button" type="submit" disabled={this.props.sendText === ''} onClick={this.props.toSend}>Send</button> 
      </div>
    )
  }
}

export default SendMessageForm;