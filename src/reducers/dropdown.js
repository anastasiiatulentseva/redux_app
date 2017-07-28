export  default(state = [], payload) => {
  switch(payload) {
    case 'check':
      return [...state, payload.item];
    default:
      return state;
  }
};
