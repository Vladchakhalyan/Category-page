import { productReducer } from "./productReducer";
import { combineReducers, createStore } from "redux";
import categoryReducer from "./categoryReducer"

let reducers = combineReducers({
  productR: productReducer,
  categoryReducer: categoryReducer, 
});

let store = createStore(reducers);

export default store;
