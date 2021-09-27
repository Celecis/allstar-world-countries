import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import SearchBox from "../../components/searchbox/searchbox.component";
import SelectBox from "../../components/searchbox/select.component";
import Countries from "../../components/countries/countries.component";

import "./homepage.styles.css";

import API_DATA from "../../countries";

const HomePage = (props) => {
  const [countries, setCountries] = useState(API_DATA);
  const [searchField, setSearchField] = useState("");
  const [continent, setContinent] = useState("All");

  const getCountries = () => {
    setCountries(API_DATA);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleContinent = (e) => {
    setContinent(e.target.value);
  };

  const filteredCountries = countries.filter(
    (country) =>
      (continent === "All" || country.continent === continent) &&
      country.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="homepage">
      <div className="search_home">
        <SearchBox
          placeholder="Search for a country..."
          handleSearch={handleSearch}
        />
        <SelectBox handleContinent={handleContinent} />
      </div>
      <Route path="/">
        {filteredCountries.length ? (
          <Countries countries={filteredCountries} />
        ) : (
          <p>No Country found that matched such criteria</p>
        )}
      </Route>
    </div>
  );
};

export default HomePage;
