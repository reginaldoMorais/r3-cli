import React, { Component } from 'react';

/* Containers / Components */
import If from 'Templates/If';

class Box extends Component {
  renderHeader(title, options, icon) {
    return (
      <div className="ibox-title">
        <h5>
          <If test={icon}>
            <i className={`fa fa-${icon}`} aria-hidden="true" />
          </If>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h5>
        <div className="ibox-tools">{options}</div>
      </div>
    );
  }

  render() {
    const { title, titleOpt, titleIcon } = { ...this.props };
    const contentClass = this.props.contentClass || '';
    const className = this.props.className || '';
    return (
      <div className={`ibox ${title && 'nopad'} ${className}`}>
        {title && this.renderHeader(title, titleOpt, titleIcon)}

        <div className={`ibox-content ${contentClass}`}>{this.props.children}</div>
      </div>
    );
  }
}

export default Box;
