import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipe: [],
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECIPE_FAV_SUCCESS:
      return {
        ...state,
        recipe: action.recipe,
      };
    case actionTypes.RECIPE_FAV_ADD_SUCCESS:
      return {
        ...state,
        // recipe: action.recipe,
      };
    default:
      return state;
  }
};

export default recipeReducer;
