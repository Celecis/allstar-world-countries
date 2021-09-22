import { combineReducers } from "redux";
//import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";

import directoryReducer from "./directory/directory.reducer";

const rootReducer = combineReducers({
  directory: directoryReducer,
});

export default rootReducer;
