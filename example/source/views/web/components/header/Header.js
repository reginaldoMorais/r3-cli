import React, { Component } from 'react';

/* Libs */
import { Navbar, NavbarBrand } from 'reactstrap';

/* Containers / Components */

class Header extends Component {
  render() {
    return (
      <Navbar color="faded" light expand="sm" className="navbar-expand-sm">
        <NavbarBrand href="/">
          <span>MY LOGO</span>
        </NavbarBrand>
      </Navbar>
    );
  }
}

Header.propTypes = {};

export default Header;
