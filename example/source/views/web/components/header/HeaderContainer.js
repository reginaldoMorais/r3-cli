import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { activateLink } from '../../../../actions/HeaderActions';

/* Components */
import Header from './Header';

const mapStateToProps = state => ({
  menu: state.menu,
});
const mapDispatchToProps = dispatch => bindActionCreators({ activateLink }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
