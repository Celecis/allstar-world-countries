import React from "react";

import Country from "../country/country.component";

const Countries = (props) => (
  <div className="country-list">
    {props.countries.map((country) => (
      <Country key={country.alpha3Code} country={country} />
    ))}
  </div>
);

export default Countries;
