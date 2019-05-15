import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Libs */
import IntlMessages from '../../components/IntlMessages';
import { Link } from 'react-router-dom';
import { slide as MenuSlide } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

/* Containers / Components */
import If from '../If';
import UserInfo from '../userInfo/UserInfoContainer';

const ReduxBurgerMenu = reduxBurgerMenu(MenuSlide);

class Menu extends Component {
  renderSubMenu(item) {
    return (
      <If test={item.active && item.submenu.length > 0}>
        <div className="menu-submenu">
          {item.submenu.map((subitem, i) => {
            return (
              <div className="menu-n2" key={`subitem-${i}`}>
                <Link to={subitem.link} onClick={() => this.props.activateSubLink(item)} className="menu-item">
                  <i className={`fa ${subitem.icon}`} />
                  <span className="nav-label">
                    <IntlMessages id={subitem.name} />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </If>
    );
  }

  renderMenu() {
    let items = this.props.menu.items;
    items = items.filter(item => item.show === true);

    return items.map((item, i) => {
      return (
        <div className={`menu-n1 ${item.active ? 'active' : ''}`} key={`item-${i}`}>
          <Link to={item.link} onClick={() => this.props.activateLink(item)} className="menu-item">
            <i className={`fa ${item.icon}`} />
            <span className="nav-label">
              <IntlMessages id={item.name} />
            </span>
          </Link>
          {this.renderSubMenu(item)}
        </div>
      );
    });
  }

  render() {
    return (
      <ReduxBurgerMenu
        isOpen={this.props.isOpen}
        pageWrapId={'page-wrapper'}
        outerContainerId={'in'}
        right={this.props.invert}
      >
        <If test={this.props.showUserInfo}>
          <UserInfo />
        </If>

        {this.renderMenu()}

        <If test={this.props.auth}>
          <div className="menu-n1">
            <Link to="/panel/auth" onClick={this.props.logout} className="menu-item">
              <i className="fa fa-sign-out" />
              <span className="nav-label">Log out</span>
            </Link>
          </div>
        </If>
      </ReduxBurgerMenu>
    );
  }
}

Menu.defaultProps = {
  invert: false,
  showUserInfo: true,
  isOpen: false,
};

Menu.propTypes = {
  invert: PropTypes.bool,
  showUserInfo: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default Menu;
