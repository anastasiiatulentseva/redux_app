import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CheckedActions from '../actions/check';
import List from './list';

class Checked extends Component {
  constructor(props) {
   super(props);

  }

  render() {
    const checkedItems = this.props.checked.sort((a, b) => (a-b)).map((item, idx) => {
      return <li className="checked-item" key={idx}>{item}</li>
    });

    return (
      <div className="">
      <div className="checked-box">
        <h3 className="">Checked items</h3>
        <ul className="checked-items">
          {checkedItems}
        </ul>
      </div>
        <List checkItem={this.props.actions.checkItem}/>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    checked: state.checked
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CheckedActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checked);

