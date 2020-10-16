import React, { useState, useEffect } from "react";
import "./styling.css";
import BookDetails from "./../page/details";
import { BrowserRouter, Route, Link } from "react-router-dom";

const SearchBar = (props) => {
  let bookTitle = props.bookData;
  // console.log(bookTitle);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // const [title, settitle] = useState([item]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    if (searchTerm) {
      const results = Object.values(props.bookData).filter((person) =>
        person.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults("");
    }
  }, [searchTerm]);
  const resetInputField = () => {
    setSearchTerm("");
  };
  const buttonClickedHandler = (obj) => {
    // let index = finalData(obj);
    // console.log(index);
    console.log("Button Clicked");
  };
  const bookTitleHandler = () => {};
  const bookClickedHandler = (item) => {
    console.log(item);
    // settitle(item);
    resetInputField();
  };
  // console.log(title);
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <input
                  type="text"
                  placeholder="Search Book"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button className="SearchButton" onClick={buttonClickedHandler}>
                  Search
                </button>
                <Link
                  className="App-link"
                  to={{
                    pathname: "/details",
                    aboutProps: { bookTitle },
                  }}
                >
                  <ul>
                    {Object.values(searchResults).map((item, index) => (
                      <li
                        key={`${index}${item}`}
                        onClick={() => bookClickedHandler(item)}
                        // onClick={() => props.onClick(index, item)}
                      >{`${index + 1}. ${item}`}</li>
                    ))}
                  </ul>
                </Link>
              </>
            );
          }}
        ></Route>
        <Route
          path="/details/"
          exact
          component={BookDetails}
          // render={() => {
          //   return <Link to="/">Home</Link>;
          // }}
        ></Route>
      </BrowserRouter>
      {/* <Route
        path="/"
        exact
        render={() => {
          return (
            <Link
              className="App-link"
              to={{
                pathname: "/details",
                aboutProps: { name: { finalData } },
              }}
            >
              <SDD
                value={searchItem}
                booksData={finalData ? finalData : "Loading..."}
                onClick={bookClickedHandler}
              ></SDD>
            </Link>
            // <Link to="/details" className="App-link">

            // </Link>
          );
        }}
      ></Route>
      <Route
        path="/details/"
        exact
        component={BD}
        // render={() => {
        //   return <Link to="/">Home</Link>;
        // }}
      ></Route> */}
    </div>
  );
};

export default SearchBar;
