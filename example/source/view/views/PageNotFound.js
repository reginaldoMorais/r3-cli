import React, { Component } from 'react';

/* Libs */
import { Row, Col } from 'reactstrap';

/* Containers / Components */
import Content from '../templates/content/ContentContainer';

class PageNotFound extends Component {
  render() {
    return (
      <div className="out">
        <Content>
          <Row>
            <Col md={12} className="text-center">
              <h1>404</h1>
              <h3 className="font-bold">Page Not Found</h3>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

PageNotFound.propTypes = {};

export default PageNotFound;
