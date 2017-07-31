export  default(state = [], payload) => {
  switch(payload.type) {
    case 'check':
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
      return toggle(state, payload.item);
    default:
      return state;
  }
};
