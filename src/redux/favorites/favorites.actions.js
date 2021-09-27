import FavoritesActionTypes from "./favorites.types";

export const addCountry = (country) => ({
  type: FavoritesActionTypes.ADD_COUNTRY,
  payload: country,
});

export const removeCountry = (country) => ({
  type: FavoritesActionTypes.REMOVE_COUNTRY,
  payload: country,
});
