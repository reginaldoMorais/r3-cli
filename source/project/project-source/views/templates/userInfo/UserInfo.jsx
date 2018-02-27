import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const user = this.props.user || {};
    const username = user.name || 'User name';

    return (
      <div className="user-info">
        <span className="username">
          <strong className="font-bold">{username}</strong>
        </span>
      </div>
    );
  }
}

export default UserInfo;
