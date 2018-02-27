import 'Assets/styles/scss/components/loadingBar.scss';
import React, { Component } from 'react';

/* Containers / Components */
import If from '../If';

class LoadingBar extends Component {
  render() {
    const isLoading = this.props.loadingBar || false;
    return (
      <div>
        <If test={isLoading}>
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

export default LoadingBar;
