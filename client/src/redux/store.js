import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

import rootReducer from "./rootReducer";

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(
    save(), // Saving done here
    logger,
    thunk 
  )
)(createStore);

// console.log(createStoreWithMiddleware)
// console.log(createStore)

const store = createStoreWithMiddleware(rootReducer, load());

export default store;
