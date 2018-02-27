import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
  constructor() {
    super();
    this.renderListItem = this.renderListItem.bind(this);
  }

  renderListItem(item) {
    return (
      <li className="active">
        <Link to={item[1].trim()}>{item[0]}</Link>
      </li>
    );
  }

  render() {
    const father = this.props.father && this.props.father.trim().split(',');
    const child = this.props.child && this.props.child.trim().split(',');

    return (
      <Row className="nav-breadcrumb">
        <Col xs={12}>
          <h2>{this.props.title}</h2>
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            {father && this.renderListItem(father)}
            {child && this.renderListItem(child)}
          </ol>
        </Col>
      </Row>
    );
  }
}

export default Breadcrumb;
