import { combineReducers } from "redux";
import favoritesReducer from "./favorites/favorites.reducer";

export default combineReducers({
  favorites: favoritesReducer,
});
