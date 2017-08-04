import React, { component } from 'react';
import { connect } from 'react-redux';
import { toggleItem } from '../actions/check';
import ListItem from "../components/ListItem";

function mapStateToProps(state, props) {
  return {
    isChecked: state.isChecked
  }
}

export default connect(mapStateToProps, { toggleItem })(ListItem);
