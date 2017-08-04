import React from 'react';
import '../App.css';

const ListItem = (props) => {
  console.log("render item");

  return (<li key={props.id}>
    <label>
      <input type="checkbox"
             className="list-item-checkbox"
             value={props.isChecked}
             onChange={ (e) => {
               props.toggleItem(props.id, !props.isChecked)
             }}
      />
      ========= {props.id} =========
    </label>
  </li>)

};

export default ListItem;
