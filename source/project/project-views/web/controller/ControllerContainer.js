import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */

/* Components */
import Controller from './Controller';

const mapStateToProps = state => ({
  auth: state.auth,
  locale: state.settings.locale,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);
