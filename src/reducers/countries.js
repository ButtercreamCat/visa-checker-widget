import { SET_COUNTRIES } from "../constants/actionTypes";

function countries(state = [], action) {
  switch (action.type) {
    case SET_COUNTRIES:
      return [...action.payload];
    default:
      return state;
  }
}

export default countries;
