import React from "react";
import "./styling.css";

const searchButton = ({ buttonClicked }) => {
  return (
    <button className="SearchButton" onClick={buttonClicked}>
      Search
    </button>
  );
};

export default searchButton;
