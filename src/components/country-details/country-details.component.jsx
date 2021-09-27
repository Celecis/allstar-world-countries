import React from "react";

import { useLocation } from "react-router";

import "./country-details.styles.css";

const CountryDetails = () => {
  let { state } = useLocation();

  console.log(state);

  return (
    <div id={state.alpha3Code} className="country___container">
      <diV className="details___container">
        <div className="flag___container">
          <img alt={`country flag for: ${state.name}`} src={state.flags[1]} />
        </div>
        <div className="info__container">
          <h3>{state.name}</h3>
          <p>
            <span className="bolder">Continent: </span>
            {state.continent
              ? ` ${state.continent}`
              : ` No Continent registered for this Country`}
          </p>
          <p>
            <span className="bolder">Region: </span>
            {state.region
              ? ` ${state.region.toLocaleString()}`
              : ` No Region registered for this Country`}
          </p>
          <p>
            <span className="bolder">Native Name: </span>
            {state.nativeName}
          </p>
          <p>
            <span className="bolder">Capital: </span>
            {state.capital}
          </p>
          <p>
            <span className="bolder">Population: </span>
            {state.population
              ? `${state.population.toLocaleString()}`
              : `No Population registered for this Country`}
          </p>
          <p>
            <span className="bolder">Currencies: </span>
            {state.currencies
              ? state.currencies
                  .map((currency) => {
                    return `${currency.name}, ${currency.code}`;
                  })
                  .join(" / ")
              : ` No Currencies registered for this Country`}
          </p>
          <p>
            <span className="bolder">Languages: </span>
            {state.languages
              ? state.languages
                  .map((currency) => {
                    return `${currency.name}`;
                  })
                  .join(", ")
              : ` No languages registered for this Country`}
          </p>
        </div>
      </diV>
    </div>
  );
};

export default CountryDetails;
