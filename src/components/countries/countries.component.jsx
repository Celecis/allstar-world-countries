import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCountry } from "../../redux/favorites/favorites.actions";
import IconFavorite from "./icon-favorite.component";

import Country from "../country/country.component";

import "./countries.styles.css";

const Countries = (props) => {
  const dispatch = useDispatch();

  const check = useSelector((state) => state.favorites.favoriteCountries);

  return (
    <div className="country_list">
      {props.countries.map((country) => (
        <div
          key={country.alpha3Code}
          id={country.alpha3Code}
          className="country_container"
        >
          <Country country={country} />
          {!check.includes(country) && (
            <button
              onClick={() => dispatch(addCountry(country))}
              className="add_to_favorites"
            >
              <IconFavorite icon="info" size={32} color="white" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Countries;
