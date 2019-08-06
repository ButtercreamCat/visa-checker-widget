import { SET_LANGUAGE } from "../constants/actionTypes";

function language(state = "en", action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
}

export default language;
