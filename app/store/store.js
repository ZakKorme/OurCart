import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list";
import pantryReducer from "./reducers/pantry";
import recipeReducer from "./reducers/recipe";
import userReducer from "./reducers/users";

const rootReducer = combineReducers({
  list: listReducer,
  pantry: pantryReducer,
  recipe: recipeReducer,
  user: userReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
