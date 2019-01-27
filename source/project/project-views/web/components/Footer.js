import React, { Component } from 'react';

/* Libs */

/* Containers / Components */

class Footer extends Component {
  render() {
    return (
      <div className="footer fixed">
        <div className="pull-right" />
        <div>
          <strong>Copyright</strong> <a href="mailto:reginaldo.cmorais@gmail.com">Reginaldo Morais</a>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {};

export default Footer;
