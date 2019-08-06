import { START_LOADING, FINISH_LOADING } from "../constants/actionTypes";

function isLoading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case FINISH_LOADING:
      return false;
    default:
      return state;
  }
}

export default isLoading;
