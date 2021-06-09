import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list";
import pantryReducer from "./reducers/pantry";
import recipeReducer from "./reducers/recipe";

const rootReducer = combineReducers({
  list: listReducer,
  pantry: pantryReducer,
  recipe: recipeReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
