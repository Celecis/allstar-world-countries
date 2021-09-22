import React from "react";

const SearchBox = ({ placeholder, handleSearch, handleRegion }) => (
  <div className="select-box">
    <div className="select-region">
      <p>Select your Region:</p>
      <select
        name="select"
        id="select"
        className="select"
        onChange={handleRegion}
      >
        <option values="All">All</option>
        <option values="Africa">Africa</option>
        <option values="Americas">Americas</option>
        <option values="Asia">Asia</option>
        <option values="Europe">Europe</option>
        <option values="Oceania">Oceania</option>
      </select>
    </div>

    <div className="search-box">
      <p>Search your Country:</p>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  </div>
);

export default SearchBox;
