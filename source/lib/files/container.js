module.exports = component => {
  return `import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Actions */
import { action } from './${component}Actions';

/* Components */
import ${component} from './${component}';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ action }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(${component});
`;
};
