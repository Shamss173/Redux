import { combineReducers } from "redux"; // Make sure this import statement is correct

import changeTheNumber from "./Logic";

const rootreducer = combineReducers({
  changeTheNumber,
});

export default rootreducer;
