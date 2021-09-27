import React from "react";

import { Link } from "react-router-dom";

import "./country.styles.css";

const Country = (props) => {
  const { name, flags, region, continent, nativeName, alpha3Code } =
    props.country;

  return (
    <div id={alpha3Code} key={alpha3Code}>
      <Link
        to={{ pathname: `/countries/${alpha3Code}`, state: props.country }}
        key={alpha3Code}
      >
        <div className="flag_container">
          <img alt={`country flag for: ${name}`} src={flags[1]} />
        </div>
        <div className="info__container">
          <h3>{name}</h3>
          <p>
            <span className="bolder">Continent: </span>
            {continent
              ? `${continent}`
              : `No Continent registered for this Country`}
          </p>
          <p>
            <span className="bolder">Region: </span>
            {region
              ? `${region.toLocaleString()}`
              : `No Region registered for this Country`}
          </p>
          <p>
            <span className="bolder">Native Name: </span>
            {nativeName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
