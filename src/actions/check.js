export const check = (item) => {
  console.log('item checked', item);
  return {
    type: 'check',
    item
  };
}
