import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { action } from '../../../../actions/IndexActions';

/* Components */
import Index from './Index';

const mapStateToProps = state => ({ common: state.common });
const mapDispatchToProps = dispatch => bindActionCreators({ action }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
