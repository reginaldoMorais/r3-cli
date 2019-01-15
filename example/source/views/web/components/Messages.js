import React, { Component } from 'react';

/* Libs */
import ReduxToastr from 'react-redux-toastr';

/* Containers / Components */

class Messages extends Component {
  render() {
    return (
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
    );
  }
}

Messages.propTypes = {};

export default Messages;
