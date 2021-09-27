import React from "react";

import "./searchbox.styles.css";

const SelectBox = ({ handleContinent }) => {
  return (
    <div className="select-box">
      <div className="select-region">
        <select
          name="select"
          id="select"
          className="select"
          onChange={handleContinent}
        >
          <option value="All">Select a Continent:</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
