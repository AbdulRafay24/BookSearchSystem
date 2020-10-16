import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SearchBar from "../components/searchBar";

const BookDetails = (props) => {
  const bb = props.location.aboutProps;
  // console.log(bb);
  // const [bookDetails, setbookDetails] = useState(bb);

  // console.log(bookDetails);
  // useEffect(() => {
  //   Object.values(bookDetails).map((aa) => {
  //     console.log(aa);
  //     // setbookDetails(aa);
  //   });
  // });
  // console.log(bookDetails);
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      {/* <h1>{bb}</h1> */}
      {/* <ul> */}
      {/* {Object.values(bookDetails).map((item) => (
        <h3 key={item}>{`${item}`}</h3>
      ))} */}
      {/* </ul> */}
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
};

export default BookDetails;
