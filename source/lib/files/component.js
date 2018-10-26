module.exports = component => {
  return `import React, { Component } from 'react';

/* Libs */
import { Row, Col, Container } from 'reactstrap';

/* Containers / Components */

class ${component} extends Component {
  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>${component} page</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

${component}.defaultProps = {};

${component}.propTypes = {};

export default ${component};
`;
};
