import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Country from "../country/country.component";
import { removeCountry } from "../../redux/favorites/favorites.actions";
import IconRemove from "./icon-remove.component";
import SearchBox from "../../components/searchbox/searchbox.component";
import SelectBox from "../../components/searchbox/select.component";

import "./favorites-list.styles.css";

const FavoritesList = () => {
  const check = useSelector((state) => state.favorites.favoriteCountries);
  //console.log(check);

  const [searchField, setSearchField] = useState("");
  const [continent, setContinent] = useState("All");
  const [currentlyDisplayed, setSearchResult] = useState([]);

  const getCountries = () => {
    setSearchResult(check);
  };

  useEffect(() => {
    getCountries();
  });

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleContinent = (e) => {
    setContinent(e.target.value);
  };

  let filteredCountries = currentlyDisplayed.filter(
    (country) =>
      (continent === "All" || country.continent === continent) &&
      country.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="search_sidebar">
          <SearchBox
            placeholder="Search for a country..."
            handleSearch={handleSearch}
          />
          <SelectBox handleContinent={handleContinent} />
        </div>
        <div className="favorites_list">
          {filteredCountries.length ? (
            filteredCountries.map((country) => (
              <div key={country.alpha3Code} className="country__container">
                <Country key={country.alpha3Code} country={country} />
                <button
                  onClick={() => dispatch(removeCountry(country))}
                  className="remove_from_favorites"
                >
                  <IconRemove icon="info" size={22} color="white" />
                </button>
              </div>
            ))
          ) : (
            <p>No Countries here to see</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
