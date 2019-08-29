import React, { Component } from 'react';

class UserList extends Component{
  render() {
    return(
      <ul className="users">Active Users: 
        {this.props.users.map(user => {
          return(
            <li key={user}>
              <div className="user">
                <div className="username">{user}</div>
              </div>
            </li>
          )
        })}
      </ul>
    );
  } 
}

export default UserList;