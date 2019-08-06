import { SET_ENTRY_REQUIREMENTS } from "../constants/actionTypes";

function entryRequirements(state = [], action) {
  switch (action.type) {
    case SET_ENTRY_REQUIREMENTS:
      return [...action.payload];
    default:
      return state;
  }
}

export default entryRequirements;
