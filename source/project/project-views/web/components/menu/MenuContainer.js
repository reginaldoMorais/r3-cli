import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { activateLink, activateSubLink } from '../../../../actions/MenuActions';

/* Components */
import Menu from './Menu';

const mapStateToProps = ({ auth, menu, burgerMenu }) => ({ auth, menu, isOpen: burgerMenu.isOpen });
const mapDispatchToProps = dispatch => bindActionCreators({ activateLink, activateSubLink }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
