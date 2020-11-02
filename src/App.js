import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";

const App = () => {
  const [moviesData, setMoviesData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");

    const result = await response.json();
    setMoviesData(result);
  };

  return (
    <div className="App">
      <SearchBar moviesData={moviesData}></SearchBar>
    </div>
  );
};

export default App;
