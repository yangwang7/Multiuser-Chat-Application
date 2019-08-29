import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state={ username:'' };
    this.login = this.login.bind(this);
  }

  login(e){
    this.setState({username: e.target.value});
  }

  render() {
    return (
      <div className="login">
        <div>Username:</div><hr/>
        <input type="text" name="username" value={this.state.username} onChange={this.login} placeholder="Enter username here" /><hr/>
        <button className="button" type="submit" disabled={this.state.username === ''} onClick={(e) => this.props.toLogin(this.state.username, e)}>Log in</button>
      </div>
    )
  }
}

export default Login;