import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list";

const rootReducer = combineReducers({
  list: listReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
