import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Libs */
import IntlMessages from '../../components/IntlMessages';
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
                <a href={subitem.link} onClick={() => this.props.activateSubLink(item)} className="menu-item">
                  <i className={`fa ${subitem.icon}`} />
                  <span className="nav-label">
                    <IntlMessages id={subitem.name} />
                  </span>
                </a>
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
          <a href={item.link} onClick={() => this.props.activateLink(item)} className="menu-item">
            <i className={`fa ${item.icon}`} />
            <span className="nav-label">
              <IntlMessages id={item.name} />
            </span>
          </a>
          {this.renderSubMenu(item)}
        </div>
      );
    });
  }

  render() {
    const { auth } = this.props;
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

        <If test={auth.token != undefined && auth.token != ''}>
          <div className="menu-n1">
            <a href="/" onClick={this.props.logout} className="menu-item">
              <i className="fa fa-sign-out" />
              <span className="nav-label">Log out</span>
            </a>
          </div>
        </If>
      </ReduxBurgerMenu>
    );
  }
}

Menu.defaultProps = {
  auth: {},
  menu: {
    items: [],
  },
  invert: false,
  showUserInfo: true,
  isOpen: false,
};

Menu.propTypes = {
  auth: PropTypes.object,
  menu: PropTypes.shape({
    items: PropTypes.array,
  }),
  invert: PropTypes.bool,
  showUserInfo: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default Menu;
