import React, { Component } from 'react';

class ErrorMessage extends Component{
	render() {
    return (
      <div className={`error ${this.props.message === ''?'hidden':''}`}>{this.props.message}</div>
    )
  }
}

export default ErrorMessage;