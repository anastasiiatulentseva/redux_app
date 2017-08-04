import React from 'react';
import '../App.css';

const List = (props) => {

  return (
    <div className="list-container">
      <h2>Select items</h2>
      <div className="list-box">
        <ul className="list-unstyled">
          {props.listItems}
        </ul>
      </div>
    </div>
  )
}

export default List;
