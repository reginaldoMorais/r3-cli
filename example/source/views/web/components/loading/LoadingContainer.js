import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */

/* Components */
import Loading from './Loading';

const mapStateToProps = ({ loading }) => ({ loading });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
