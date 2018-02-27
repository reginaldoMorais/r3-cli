import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

/* Libs */

/* Containers / Components */
import Content from 'Templates/content/ContentContainer';

class PageNotFound extends Component {
  render() {
    return (
      <div className="out">
        <Content>
          <Row>
            <Col md={12} className="text-center">
              <h1>404</h1>
              <h3 class="font-bold">Page Not Found</h3>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default PageNotFound;
