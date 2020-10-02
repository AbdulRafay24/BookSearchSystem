import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import SearchButton from './components/searchButton';
import SDD from './components/searchDropDown';
var convert = require('xml-js'); //Library to convert Xml to json

const App = () => {
  let XMLData = '';
  const [finalData, setFinalData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  // Testing function to set state value
  const fetchingData = (data) => {
    setFinalData(data);
  };

  // Implemented Async Await to fetch XML data

  const fetchData = async () => {
    const response = await fetch(
      'https://www.goodreads.com/search/index.xml?key=q9976AVfCI34Fp0mJUqyVQ&q=Ender%27s+Game',
    );

    XMLData = await response.text(); //response.text() for xml type of data

    /*
     **** options and result variables here are used to convert XMLdata to JS object
     */

    const options = { ignoreComment: true, alwaysChildren: true };
    const result = convert.xml2js(XMLData, options);

    // Convert converted Object to Array and looping through to extract the data

    const Array = await Object.entries(result).map((item, index) => {
      let JSONdata = []; // JSONdata used to store value of the final title data
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
                      const titleArray = Object.entries(item[1][1]);
                      // console.log(titleArray);
                      titleArray.map((item, index) => {
                        if (index === 2) {
                          const lastArray = item[1];
                          // console.log(lastArray);
                          lastArray.map((item) => {
                            //Pushing data to array
                            JSONdata.push(item.text);
                            //console.log(JSONdata)
                          });
                        }
                      });
                    }
                  });
                });
              }
            });
          }
        });
        // finally calling function and setting FinalJSON data value of JSONdata array
        fetchingData(JSONdata);
      }
    });
  };

  const keyPressHandler = (e) => {
    console.log(e.key);
  };
  const buttonClickedHandler = () => {
    console.log('Button Clicked');
  };

  // console.log(finalData);
  return (
    <div className='App'>
      <header className='App-header'>
        <div></div>
        <SearchBar
          placeholder='Enter Movie Name'
          keyPressed={keyPressHandler}
        ></SearchBar>
        <SearchButton buttonClicked={buttonClickedHandler}></SearchButton>

        <SDD booksData={finalData ? finalData : 'Loading...'}></SDD>
        {/* <coponer props=aa/>  */}
      </header>
    </div>
  );
};

export default App;
