import React, { useState, useEffect } from "react";
import "./styling.css";

const SearchBar = (props) => {
  const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin",
  ];
  // console.log(bookData);
  const [data, setData] = useState(props.bookData ? props.bookData : "Loaing");
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const keyPressHandler = (e) => {
    // console.log(e.key);
    setSearchItem(e.target.value);
  };
  useEffect(() => {
    // const bd = props.bookData;
    console.log(props.bookData);

    const result = people.filter((filteredList) => {
      // console.log(filteredList.includes("Ender's Game (Ender's Saga, #1)"));
      return filteredList.toLowerCase().includes(searchItem.toLowerCase);
    });
    console.log(result);
    // const bb = Object.entries(bd);
    // const results = bb.filter((filteredList) =>
    //   filteredList.includes(searchItem)
    // );
    // setSearchResult(results);
  }, [props.bookData, searchItem]);

  // console.log(data);
  // console.log(searchResult);

  // console.log(data);
  return (
    <>
      {props.bookData ? (
        <input
          className="SearchBar"
          type="text"
          placeholder="Type Book Name"
          onChange={keyPressHandler}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default SearchBar;
