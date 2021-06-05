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
        pantry: action.data,
      };
    default:
      return state;
  }
};

export default pantryReducer;
