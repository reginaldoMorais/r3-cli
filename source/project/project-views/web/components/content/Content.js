import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Libs */
import { Container } from 'reactstrap';

/* Containers / Components */
import Loading from '../loading/LoadingContainer';

class Content extends Component {
  render() {
    return (
      <Container
        fluid={this.props.fluid}
        className={this.props.className == '' ? `content` : `content ${this.props.className}`}
      >
        {this.props.children}
        <Loading />
      </Container>
    );
  }
}

Content.defaultProps = {
  className: '',
  fluid: false,
};

Content.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  children: PropTypes.element,
};

export default Content;
