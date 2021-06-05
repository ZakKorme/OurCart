import * as actionTypes from "./actionTypes";
import * as firebase from "firebase";

export const initPantry = () => {
  return {};
};

export const initPantrySuccess = (pantry) => {
  return {
    type: actionTypes.PANTRY_INIT_SUCCESS,
    data: pantry,
  };
};
