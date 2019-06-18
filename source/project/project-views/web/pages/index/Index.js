import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Libs */
import { Row, Col, Container } from 'reactstrap';
import IntlMessages from '../../components/IntlMessages';

/* Containers / Components */

class Index extends Component {
  render() {
    return (
      <Container className="welcome-page">
        <Row>
          <Col xs={12}>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="welcome">
              <h1>R3-CLI</h1>
              <p className="subtitle">React + Redux + Router Generator</p>
              <p className="welcome-desciption">
                <IntlMessages id="welcome.paragraph" />
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

Index.defaultProps = {};

Index.propTypes = {};

export default Index;
