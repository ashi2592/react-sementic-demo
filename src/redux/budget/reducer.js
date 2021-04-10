import { ADD_ENTRY, DELETE_ENTRY, EDIT_ENTRY } from './actions'

const initialstate = [
  {
    id: 1,
    description: "Add Income",
    value: 5000,
    isExpense: false
  },
  {
    id: 2,
    description: "Rent",
    value: 2500,
    isExpense: true
  },
  {
    id: 3,
    description: "other expense",
    value: 2500,
    isExpense: true
  },
  {
    id: 4,
    description: "Add work Income ",
    value: 2500,
    isExpense: false
  }
];

const Budget = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return state.concat({ ...action.payload });
    case EDIT_ENTRY:
      const index = state.findIndex(x => x.id === action.payload.id);
      if (index > 0) {
        const { payload: { description, value, isExpense } } = action;
        state[index].description = description;
        state[index].value = value;
        state[index].isExpense = isExpense;
      }
      return state;
    case DELETE_ENTRY:
      const newstate = state.filter(x => x.id !== action.payload.id);
      return newstate;
    default:
      return state;
  }
}
export default Budget;