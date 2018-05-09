import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Libs */

/* Containers / Components */

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

UserInfo.propTypes = {
  user: PropTypes.object,
};

export default UserInfo;
