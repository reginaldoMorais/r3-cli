import { connect } from 'react-redux';

/* Actions */

/* Components */
import UserInfo from './UserInfo';

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(UserInfo);
