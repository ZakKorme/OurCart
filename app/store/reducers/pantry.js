import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pantry: [],
  error: null,
};

const pantryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PANTRY_INIT_SUCCESS:
      return {
        ...state,
        pantry: action.pantry,
      };
    case actionTypes.PANTRY_ADD_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default pantryReducer;
