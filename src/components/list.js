import React, { Component } from 'react';
import '../App.css';

class List extends Component {

  constructor(props) {
    super(props);

    let items = new Array(2000).fill().map((v,i)=>i + 1);
    this.state = {
      listItems: items
    }
  }


  render() {
    const listItems = this.state.listItems.map((item, idx) => {
      return <li key={idx}>
        <label>
          <input type="checkbox" className="list-item-checkbox"/>
          ========= {item} =========
        </label>
      </li>
    });
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Redux</h2>
        </div>
        <div className="App-intro">
          Select items
        </div>
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
