import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Containers / Components */
import If from '../If';

class Loading extends Component {
  render() {
    return (
      <div>
        <If test={this.props.loading}>
          <div id="loading" data-loading="">
            <div id="loading-bar-spinner" className="loading-bar-spinner">
              <div className="spinner-icon" />
              <div className="background" />
            </div>
          </div>
        </If>
      </div>
    );
  }
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loading;
