import { combineReducers } from "redux";
import language from "./language";
import countries from "./countries";
import localization from "./localization";
import citizenship from "./citizenship";
import destinations from "./destinations";
import entryRequirements from "./entryRequirements";
import isLoading from "./isLoading";

export default combineReducers({
  language,
  countries,
  localization,
  citizenship,
  destinations,
  entryRequirements,
  isLoading
});
