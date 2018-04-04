import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

/* Libs */

/* Containers / Components */

class Header extends Component {
  render() {
    return (
      <Navbar color="faded" light expand="sm" className="navbar-expand-sm">
        <NavbarBrand href="/">
          <span>MY</span> | <span>LOGO</span>
        </NavbarBrand>
      </Navbar>
    );
  }
}

Header.propTypes = {};

export default Header;
