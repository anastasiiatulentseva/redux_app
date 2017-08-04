export const addToList = (item) => {
  console.log('item checked', item);
  return {
    type: 'addToList',
    item
  };
};

export const toggleItem = (item, value) => {
  console.log('item toggled', item, value);
  return {
    type: 'toggle',
    item: {id: item, isChecked: value}
  };
};
