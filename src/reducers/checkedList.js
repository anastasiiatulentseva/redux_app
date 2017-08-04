export default (state = [], action) => {
  switch (action.type) {
    case 'addToList':

      function toggle(array, value) {
        let index = array.indexOf(value);
        if (index === -1) {
          return [...array, value];
        } else {
          return [
            ...array.slice(0, index),
            ...array.slice(index + 1)
          ];
        }
      }

      return toggle(state, action.item);

    default:
      return state;
  }
};



