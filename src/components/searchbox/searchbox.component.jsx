import React from "react";
import "./searchbox.styles.css";

const SearchBox = ({ placeholder, handleSearch }) => {
  return (
    <div className="search-box">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
