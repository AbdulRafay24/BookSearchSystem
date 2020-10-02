import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import SearchButton from "./components/searchButton";
import SDD from "./components/searchDropDown";

var convert = require("xml-js");
let aa = [];
let bb = ["one", "two"];
// console.log(bb);
// // let bb = "This is bb";

// console.log(typeof aa);
const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    var request = new XMLHttpRequest();

    request.open(
      "GET",
      "https://www.goodreads.com/search/index.xml?key=q9976AVfCI34Fp0mJUqyVQ&q=Ender%27s+Game",
      true
    );

    request.onload = function () {
      // Begin accessing JSON data here
      var data = this.response;

      var options = { ignoreComment: true, alwaysChildren: true };
      var result = convert.xml2js(data, options);
      var myData = result;
      // console.log(JsonJSON.stringify(myData));
      var test = Object.entries(myData);
      var mainArr = test[1][1][0].elements[1].elements[6].elements;
      let cc = JSON.parse(JSON.stringify(mainArr));
      // console.log(cc);
      let dd = Object.entries(cc);
      // console.log(dd);
      for (let i = 0; i < dd.length; i++) {
        aa.push(dd[i][1].elements[8].elements[1].elements[0].text);
      }
      // console.log(aa);
      aa.map((booksData) => {
        // console.log(booksData);
      });

      // for (let key in cc) {
      //   console.log(key);
      // }
      // mainArr.map((mm) => {
      //   let booksArr = mm.elements[8].elements[1].elements[0];
      //   console.log(booksArr.text);

      //   aa.push(booksArr.text);
      //   // console.log(aa);

      //   // aa.map((bb) => {
      //   //   console.log(bb);
      //   //   return bb;
      //   // });
      //   // console.log(booksArr.text);
      // }, []);
    };

    request.send();
  });
  // console.log(aa);
  const keyPressHandler = (e) => {
    console.log(e.key);
  };
  const buttonClickedHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>Movies: {aa}</div>
        <SearchBar
          placeholder="Enter Movie Name"
          keyPressed={keyPressHandler}
        ></SearchBar>
        <SearchButton buttonClicked={buttonClickedHandler}></SearchButton>

        <SDD booksD={aa}></SDD>
        {/* <coponer props=aa/> */}
      </header>
    </div>
  );
};

export default App;
