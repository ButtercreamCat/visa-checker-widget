import { SET_DESTINATIONS } from "../constants/actionTypes";

function destinations(state = [], action) {
  switch (action.type) {
    case SET_DESTINATIONS:
      return [...action.payload];
    default:
      return state;
  }
}

export default destinations;
