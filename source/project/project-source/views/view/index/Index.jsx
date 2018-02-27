import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

/* Libs */

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

export default Index;
