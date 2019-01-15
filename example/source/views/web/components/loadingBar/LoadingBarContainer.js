import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */

/* Components */
import LoadingBar from './LoadingBar';

const mapStateToProps = state => ({
  loadingBar: state.loadingBar,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoadingBar);
