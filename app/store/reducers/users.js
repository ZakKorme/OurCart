import * as actionTypes from "../actions/actionTypes";

const initialState = {
  numOfRecipes: 0,
  error: null,
  firstName: null,
  lastName: null,
  phoneNumber: null,
  groceryEntries: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_GET_SUCCESS:
      return {
        ...state,
        numOfRecipes: action.numOfRecipes,
        firstName: action.firstName,
        lastName: action.lastName,
        phoneNumber: action.phoneNumber,
      };
    case actionTypes.USER_ADD_SUCCESS:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        phoneNumber: action.phoneNumber,
      };

    default:
      return state;
  }
};

export default userReducer;
