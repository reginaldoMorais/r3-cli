import React, { Component } from 'react';

/* Libs */
import { Row, Col, Container } from 'reactstrap';

/* Containers / Components */

class Index extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Hello World</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

Index.defaultProps = {};

Index.propTypes = {};

export default Index;
