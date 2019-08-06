import { SET_LOCALIZATION } from "../constants/actionTypes";

function localization(state = {}, action) {
  switch (action.type) {
    case SET_LOCALIZATION:
      return { ...action.payload };
    default:
      return state;
  }
}

export default localization;
