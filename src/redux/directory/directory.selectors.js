import { createSelector } from "reselect";

// 1: INPUT SELECTOR:
const selectDirectory = (state) => state.countries;

//2: OUTPUT SELECTOR
export const selectDirectoryCountries = createSelector(
  [selectDirectory],
  (countries) => countries.alpha3Code
);
