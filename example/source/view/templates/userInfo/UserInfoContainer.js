import { connect } from 'react-redux';

/* Actions */

/* Components */
import UserInfo from './UserInfo';

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(UserInfo);
