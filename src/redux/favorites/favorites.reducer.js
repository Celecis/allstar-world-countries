import FavoritesActionTypes from "./favorites.types";
import {
  addCountryToFavorites,
  removeCountryFromFavorites,
} from "./favorites.utils";

const INITIAL_STATE = {
  favoriteCountries: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.ADD_COUNTRY:
      return {
        ...state,
        favoriteCountries: addCountryToFavorites(
          state.favoriteCountries,
          action.payload
        ),
      };
    case FavoritesActionTypes.REMOVE_COUNTRY:
      return {
        ...state,
        favoriteCountries: removeCountryFromFavorites(
          state.favoriteCountries,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
