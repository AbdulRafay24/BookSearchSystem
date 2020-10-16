import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/searchBar";
import SearchButton from "./components/searchButton";
import SDD from "./components/searchDropDown";
import BD from "./page/details";

var convert = require("xml-js"); //Library to convert Xml to json

const App = () => {
  let XMLData = "";
  const [finalData, setFinalData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // React.useEffect(() => {
  //   const rr = finalData.filter((finalData) =>
  //     finalData.toLowerCase().includes(searchItem)
  //   );
  // });

  // // Testing function to set state value
  const fetchingData = (data) => {
    setFinalData(data);
  };

  // Implemented Async Await to fetch XML data

  var obj = {
    id: "",
    title: "",
    author: "",
    url: "",
  };
  const fetchData = async () => {
    const response = await fetch(
      "https://www.goodreads.com/search/index.xml?key=q9976AVfCI34Fp0mJUqyVQ&q=Ender%27s+Game"
    );

    XMLData = await response.text(); //response.text() for xml type of data

    /*
     **** options and result variables here are used to convert XMLdata to JS object
     */

    const options = { ignoreComment: true, alwaysChildren: true };
    const result = convert.xml2js(XMLData, options);

    // Convert converted Object to Array and looping through to extract the data
    // console.log(result);
    const Array = await Object.entries(result).map((item, index) => {
      let JSONdata = []; // JSONdata used to store value of the final title data
      // console.log(item);
      if (index === 1) {
        const ElementsArray = Object.entries(item[1][0]);
        // console.log(ElementsArray);
        ElementsArray.map((item, index) => {
          // console.log(index);
          if (index === 2) {
            const ItemArray = Object.entries(item[1][1]);
            // console.log(ItemArray);
            ItemArray.map((item, index) => {
              // console.log(index);
              if (index === 2) {
                const singleItemArray = item[1][6].elements;
                // console.log(singleItemArray);
                singleItemArray.map((item, index) => {
                  const test = Object.entries(item.elements[8]);
                  // console.log(test);
                  test.map((item, index) => {
                    if (index === 3) {
                      const titleArray = Object.entries(item[1]);
                      // console.log(titleArray);
                      titleArray.map((item, index) => {
                        // console.log(item);

                        const idArray = item[1];
                        console.log(idArray);
                        // if (index === 0) {
                        // const idArray = item[1].elements[0].text;
                        // console.log(idArray);
                        // obj.id = idArray;

                        // JSONdata.push(idArray);
                        // }
                        // if (index === 1) {
                        // const tArray = item[1].elements[0].text;
                        // console.log(tArray);
                        // obj.title = tArray;
                        // JSONdata.push(tArray);
                        // }
                        // if (index === 2) {
                        // const authorArray =
                        // item[1].elements[1].elements[0].text;
                        // console.log(authorArray);
                        // obj.author = authorArray;
                        // JSONdata.push(authorArray);
                        // }
                        // if (index === 3) {
                        // const urlArray = item[1].elements[0].text;
                        // console.log(urlArray);
                        // obj.url = urlArray;
                        // JSONdata.push(urlArray);
                        // }
                        // console.log(obj);
                        // JSONdata.push(obj);
                      });
                      // titleArray.forEach((id, title, author, iUrl, siUrl) => {
                      //   console.log(id);
                      // });

                      // titleArray.forEach((element) => {
                      //   console.log(element);

                      // JSONdata.push(x);
                      // console.log(JSONdata);
                      // });
                      // titleArray.map((item, index) => {
                      //   if (index === 2) {
                      // console.log(item);
                      // const lastArray = item[1].elements;
                      // console.log(lastArray);

                      // lastArray.map((item) => {
                      // const dataArray = Object.entries(item);
                      // console.log(dataArray);
                      // dataArray.map((item) => {
                      // console.log(item);
                      // if (item[0] == "text") {
                      //   const thisArray = item[1];
                      // console.log(thisArray);
                      // Object.entries(item[1]).forEach(
                      //   (id, title, author, iUrl, siUrl) => {
                      //     console.log(id);
                      //   }
                      // );
                      // console.log(dataArray[1]);
                      // const thisArray = item[1];
                      // console.log(thisArray);
                      // console.log(thisArray);
                      // Object.entries(thisArray).forEach(
                      //   (id, title, author, iUrl, siUrl) => {
                      //     console.log(id);
                      //   }
                      // );
                      // }
                      // });
                      // console.log(dataArray);
                      // if (dataArray[0] == "text") {
                      //   console.log(dataArray[1]);
                      // const thisArray = item[1];
                      // console.log(thisArray);

                      //     dataArray.forEach((element) => {
                      //       var x = element;
                      //       // console.log(x);
                      // if (x[0] == "text") {
                      //   console.log(x[1])
                      // console.log(x);
                      // JSONdata.push(x);
                      // console.log(JSONdata);
                      // }
                      // });

                      // if (dataArray[1] == "text") {
                      //   console.log(dataArray[1][1]);
                      // }
                      // dataArray.map((item) => {
                      // console.log(item);
                      // s
                      // console.log(item);
                      // if (item[0] == "text") {
                      //   const thisArray = item[1];
                      // console.log(thisArray);
                      // thisArray.forEach((element) => {
                      //   var x = element;
                      //   console.log(x);
                      // });
                      // console.log(thisArray);
                      // console.log(thisArray);
                      // JSONdata.push(thisArray);
                      // console.log(JSONdata);
                      // }
                      // });
                      // });
                      // lastArray.map((item) => {
                      //       //Pushing data to array
                      // console.log(item.text);
                      // JSONdata.push(item.text);
                      // console.log(JSONdata);
                      // });
                      // }
                      // });
                    }
                  });
                });
              }
            });
          }
        });
        // finally calling function and setting FinalJSON data value of JSONdata array
        // fetchingData(JSONdata);
        // console.log(JSONdata);
        fetchingData(JSONdata);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar bookData={finalData}></SearchBar>

        {/* <SearchButton buttonClicked={buttonClickedHandler}></SearchButton> */}
        {/* <SDD
          value={searchItem}
          booksData={finalData ? finalData : "Loading..."}
          onClick={bookClickedHandler}
        ></SDD> */}
        {/* <BrowserRouter>
          <Route
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
          ></Route>
        </BrowserRouter> */}
      </header>
    </div>
  );
};

export default App;
