import { SET_CITIZENSHIP } from "../constants/actionTypes";

function citizenship(state = "", action) {
  switch (action.type) {
    case SET_CITIZENSHIP:
      return action.payload;
    default:
      return state;
  }
}

export default citizenship;
