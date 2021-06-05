import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list";
import pantryReducer from "./reducers/pantry";

const rootReducer = combineReducers({
  list: listReducer,
  pantry: pantryReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
