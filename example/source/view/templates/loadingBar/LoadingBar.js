import '../../../assets/styles/scss/components/loadingBar.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Containers / Components */
import If from '../If';

class LoadingBar extends Component {
  render() {
    return (
      <div>
        <If test={this.props.loadingBar}>
          <div id="loadingbar" data-loadingbar="">
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

LoadingBar.defaultProps = {
  loadingBar: false,
};

LoadingBar.propTypes = {
  loadingBar: PropTypes.bool,
};

export default LoadingBar;
