import React, { Component } from 'react';
import './App.css';

import UserList from './UserList';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import Login from './Login';
import Logout from './Logout';
import ErrorMessage from './ErrorMessage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      messages: [],
      sendText: '',
      activeUser:'',
      activePage: 'login',
      errorMessage: ''
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.send = this.send.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
    this.timer = null;
  }

  login(username){
    fetch("/users", {
      method:'POST',
      headers: new Headers({
        'content-Type': 'application/json'
      }),
      body: JSON.stringify({ loginUser: username })
    })
    .then(response => response.json())
    .then(res => {
      this.setState({ 
        activeUser: username,
        activePage: 'chat',
        users: res.users, 
        messages: res.messages, 
        errorMessage: '' 
      });
    })
    .catch(e => this.setState({ errorMessage: e }))
  }

  logout(){
    fetch("/users",{
      method: 'delete',
      headers: new Headers({
        'content-Type': 'application/json'
      }),
      body: JSON.stringify({ loginUser: this.state.activeUser })
    })
    .then(response => response.json())
    .then(res => {
      this.setState({ 
        activeUser: '',
        activePage: 'login', 
        errorMessage: '' 
      });
    })
    .catch(e => this.setState({ errorMessage: e }))
  }

  send(){
    fetch("/chat", {
      method: 'POST',
      headers: new Headers({
        'content-Type': 'application/json'
      }),
      body: JSON.stringify({ 
        sender: this.state.activeUser, 
        message: this.state.sendText 
      })
    })
    .then(response => response.json())
    .then(res => this.setState({ 
      'messages': res.messages, 
      sendText: '',
      errorMessage: ''
    }))
    .catch(e => this.setState({ errorMessage: e }))
  }

  onSendMessage(e){
    this.setState({ sendText: e.target.value });
  }

  componentDidMount() {
    this.timer = setInterval(()=>{
      fetch("/chat")
      .then(response => response.json())
      .then(res => {
        this.setState({ 
          users: res.users, 
          messages: res.messages, 
          errorMessage: '' 
        });
      })
      .catch(e => this.setState({ errorMessage: e }))
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <div className={`page ${this.state.activePage === 'chat'?'active':'' }`}>
          <div className="display-panel">
            <UserList users={this.state.users} />
            <MessageList messages={this.state.messages} />
          </div>
          <SendMessageForm sendText={this.state.sendText} onSendMessage={this.onSendMessage} toSend={this.send}/>
          <Logout toLogout={this.logout}/>
          <ErrorMessage msg={this.state.errorMessage} />
        </div>
        <div className={`page ${this.state.activePage === 'login'?'active':''}`}>
          <Login toLogin={this.login}/>
         </div>
      </div>
    );
  }
}

export default App;
