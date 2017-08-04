import { connect } from 'react-redux';
import Checked from '../components/CheckedItems';
import { addToList } from '../actions/check';

function mapStateToProps(state, props) {

  return {
    checked: state.checkedItems
  }
}

export default connect(mapStateToProps, { addToList } )(Checked);
