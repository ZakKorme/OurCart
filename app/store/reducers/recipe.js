import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipe: [],
  error: null,
  recipeSearch: [],
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
      };
    case actionTypes.RECIPE_SEARCH_SUCCESS:
      return {
        ...state,
        recipeSearch: action.recipeSearch,
      };
    default:
      return state;
  }
};

export default recipeReducer;
