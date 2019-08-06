// ACTION TYPES
import {
  SET_LANGUAGE,
  SET_COUNTRIES,
  SET_LOCALIZATION,
  SET_CITIZENSHIP,
  SET_DESTINATIONS,
  SET_ENTRY_REQUIREMENTS
} from "../constants/actionTypes";
// AXIOS
import axios from "axios";
// APIs
import api from "../api/api";
import lang_api from "../api/lang_api";
import proxy from "../api/proxy";

const API = api;
const KEY = process.env.REACT_APP_API_KEY;
const PROXY = proxy;
const LANG_API = lang_api;

// ********* LOAD_LOCALIZATION *********
export function loadLocalization(languageCode) {
  // return a thunk
  return (dispatch, setState) => {
    axios.get(`${LANG_API}${languageCode}.json`).then(result => {
      console.log(result.data);
      const language = languageCode.toLowerCase();
      const countries = result.data.countries;
      const localization = result.data.localization;
      dispatch(setLanguage(language));
      dispatch(setCountries(countries));
      dispatch(setLocalization(localization));
    });
  };
}

// ********* SET_LANGUAGE *********
export function setLanguage(data) {
  return {
    type: SET_LANGUAGE,
    payload: data
  };
}

// ********* SET_COUNTRIES *********
export function setCountries(data) {
  return {
    type: SET_COUNTRIES,
    payload: data
  };
}

// ********* SET_LOCALIZATION *********
export function setLocalization(data) {
  return {
    type: SET_LOCALIZATION,
    payload: data
  };
}

// ********* SET_CITIZENSHIP *********
export function setCitizenship(data) {
  return {
    type: SET_CITIZENSHIP,
    payload: data
  };
}

// ********* SET_DESTINATIONS *********
export function setDestinations(data) {
  return {
    type: SET_DESTINATIONS,
    payload: data
  };
}

// ********* LOAD_ENTRY_REQUIREMENTS *********
export function loadEntryRequirements(citizenship, destinations, language) {
  const requests = destinations.map(destination =>
    axios.get(
      `${PROXY}${API}entry-requirements?citizenship=${citizenship}&destination=${destination}&language=${language}&key=${KEY}`
    )
  );
  // return a thunk
  return (dispatch, setState) => {
    axios.all(requests).then(
      axios.spread((...results) => {
        const filteredResults = results.map(result => result.data);
        console.log(filteredResults);
        dispatch(setEntryRequirements(filteredResults));
      })
    );
  };
}

function setEntryRequirements(data) {
  return {
    type: SET_ENTRY_REQUIREMENTS,
    payload: data
  };
}
