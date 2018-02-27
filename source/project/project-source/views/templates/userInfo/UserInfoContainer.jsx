import { connect } from 'react-redux';

/* Components */
import UserInfo from './UserInfo';

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(UserInfo);
