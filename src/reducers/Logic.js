const intitalstate = 10;
const changeTheNumber = (state = intitalstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + +1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENTBYVALUE":
      return state + action.payload;
    default:
      return state;
  }
  // throw new Error("Unknow action type: " + action.type);
};
export default changeTheNumber;
