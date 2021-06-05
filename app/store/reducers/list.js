import * as actionTypes from "../actions/actionTypes";

const initialState = {
  list: [],
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
      };
    case actionTypes.LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.LIST_REMOVE_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default listReducer;
