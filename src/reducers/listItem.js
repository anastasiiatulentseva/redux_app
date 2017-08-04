export default(state = [], action) => {
  switch(action.type) {
    case 'toggle':
      return [...state, action.item].map(checkbox =>{
        if (checkbox.id !== action.item) {
          return checkbox;
        }
        return {
          ...checkbox,
          isChecked: !checkbox.isChecked
        };
      });
    default:
      return state;
  }
};
