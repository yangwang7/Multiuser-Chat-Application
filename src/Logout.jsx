import React, { Component } from 'react';

class Logout extends Component {
  render() {
    return (
      <div className="logout">
        <button className="button" type="submit" onClick={this.props.toLogout}>Log out</button>
      </div>
    )
  }
}

export default Logout;