export const checkItem = (item) => {
  console.log('item checked', item);
  return {
    type: 'check',
    item
  };
}
