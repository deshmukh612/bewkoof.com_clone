import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk"
  import productReducer from "./products/reducer";
 
  
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootreducer = combineReducers({
    ecommerceData: productReducer
  });
  
  export const store = legacy_createStore(
    rootreducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  