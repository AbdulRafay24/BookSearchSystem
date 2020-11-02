import React, { useState, useEffect } from "react";
import "./styling.css";
import BookDetails from "./../page/details";
import { BrowserRouter, Route, Link } from "react-router-dom";

/**
 *
 * @param {*} props Movies Array
 */

const SearchBar = (props) => {
  const moviesArray = Object.entries(props.moviesData);
  let titlesArray = []; // initialized an empty array in which titles are pushed

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value); // setting search term as user search different movies
  };

  useEffect(() => {
    moviesArray.map((item) => {
      const title = item[1].title; //To fetch all movie titles
      titlesArray.push(title); // Pushing titles in titlesArray
    });
  });

  useEffect(() => {
    if (searchTerm) {
      const results = titlesArray.filter((person) =>
        person.toLowerCase().includes(searchTerm.toLowerCase())
      ); // to filter the titles

      setSearchResults(results);
    } else {
      setSearchResults("");
    }
  }, [searchTerm]);

  const resetInputField = () => {
    setSearchTerm("");
  };

  return (
    <div className="main">
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <h1>Movie Search System</h1>
                <input
                  className="SearchBar"
                  type="text"
                  placeholder="Search Movie"
                  value={searchTerm} // Movie Searching for
                  onChange={handleChange}
                />
                <div className="container">
                  <ul className="myUl">
                    {Object.values(searchResults).map((item, index) => (
                      <Link
                        className="myLi"
                        key={`${index}${item}`}
                        to={{
                          pathname: "/details",
                          allDataProps: { moviesArray }, // Sending all Movies Data as Props
                          titleProp: { item }, // Sending the particular movie which was clicked
                        }}
                      >
                        <li
                          key={`${index}${item}`}
                          onClick={() => resetInputField()}
                        >{`${index + 1}. ${item}`}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </>
            );
          }}
        ></Route>
        <Route path="/details" exact component={BookDetails}></Route>
      </BrowserRouter>
    </div>
  );
};

export default SearchBar;
