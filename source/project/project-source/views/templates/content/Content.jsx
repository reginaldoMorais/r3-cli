import React, { Component } from 'react';
import { Container } from 'reactstrap';

/* Libs */

/* Containers / Components */
import LoadingBar from '../loadingBar/LoadingBarContainer';

class Content extends Component {
  render() {
    const className = this.props.className ? `content ${this.props.className}` : `content`;
    const fluid = this.props.fluid || false;

    return (
      <Container fluid={fluid} className={className}>
        {this.props.children}
        <LoadingBar />
      </Container>
    );
  }
}

export default Content;
