import React from "react";
import "./styling.css";

const SearchBar = ({ placeholder, keyPressed }) => {
  return (
    <input
      className="SearchBar"
      type="text"
      placeholder={placeholder}
      onKeyPress={keyPressed}
    />
  );
};
export default SearchBar;
