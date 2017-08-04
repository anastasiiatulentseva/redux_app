import React from 'react';

const CheckedItems = (props) => {

  const items = props.checked.map(function (item) {
     return item.id
  })
  const checkedItems = items.sort((a, b) => (a - b)).map((item, idx) => {
    return <li className="checked-item" key={idx}>{item}</li>
  });

  return (
    <div className="checked-box">
      <h3 className="">Checked items</h3>
      <ul className="checked-items">
        {checkedItems}
      </ul>
    </div>
  )
}

export default CheckedItems;


