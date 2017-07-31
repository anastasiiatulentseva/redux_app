import React, { Component } from 'react';
import '../App.css';

class List extends Component {

  constructor(props) {
    super(props);
    this.onCheckItem = this.onCheckItem.bind(this);

    let items = new Array(2000).fill().map((v,i)=>i + 1);
    this.state = {
      listItems: items
    }
  }

  onCheckItem(item) {
    this.props.checkItem(item)
  }

  render() {
    const listItems = this.state.listItems.map((item, idx) => {
      return <li key={idx}>
        <label>
          <input type="checkbox" className="list-item-checkbox" onChange={()=>this.onCheckItem(item)}/>
          ========= {item} =========
        </label>
      </li>
    });
    return (
      <div className="list-container">
        <h2>Select items</h2>
        <div className="list-box">
          <ul className="list-unstyled">
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default List;
