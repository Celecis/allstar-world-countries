export const addCountryToFavorites = (favorites, countryToAdd) => {
  const existingCountry = favorites.find(
    (favorite) => favorite.alpha3Code === countryToAdd.alpha3Code
  );

  if (existingCountry) {
    return favorites.map((favorite) =>
      favorite.alpha3Code === countryToAdd.alpha3Code
        ? { ...favorite, favorite }
        : favorite
    );
  }

  return [...favorites, countryToAdd];
};

export const removeCountryFromFavorites = (favorites, countryToRemove) => {
  return favorites.filter(
    (favorite) => favorite.alpha3Code !== countryToRemove.alpha3Code
  );
};
