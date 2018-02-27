import React, { Component } from 'react';

class Button extends Component {
  render() {
    const className = this.props.className;
    const title = this.props.title;
    return (
      <button className={`btn ${className}`} title={title}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
