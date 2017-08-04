import React from 'react';
import { connect } from 'react-redux';
import { toggleItem } from '../actions/check';
import List from "../components/List";
import ListItem from "../components/ListItem"

function mapStateToProps(state, props) {
  return {
    checked: state.checkedItems,
    listItems: new Array(10).fill().map((v, i) =>
      <ListItem key={ i + 1 } id={ i + 1 } toggleItem={ toggleItem }/>
    )
  }
}

export default connect(mapStateToProps, { toggleItem })(List);
