import React from "react";

import { Link } from "react-router-dom";

const Country = (props) => {
  const {
    alpha3Code,
    name,
    flag,
    region,
    subregion,
    nativeName,
    capital,
    population,
    currencies,
  } = props.country;

  return (
    <div id={alpha3Code} className="country-container">
      <h3>{name}</h3>
      <div className="flag-container">
        <img alt="country" src={flag} />
      </div>
      <div className="info-container">
        <p>Region: {region}</p>
        <p>Sub-Region: {subregion}</p>
        <p>Native Name: {nativeName}</p>
        <p>Capital: {capital}</p>
        <p>Population: {population.toLocaleString("pt-PT")}</p>
        <p>
          Currencies:{" "}
          {currencies
            .filter((c) => c.name)
            .map((c) => `${c.name} (${c.code})`)
            .join(", ")}
        </p>
      </div>
      <Link to={`/${props.country.alpha3Code}`}>Learn More</Link>
    </div>
  );
};

export default Country;
