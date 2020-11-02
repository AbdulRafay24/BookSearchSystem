import React from "react";
import "../components/styling.css";
import { useHistory } from "react-router-dom";

const BookDetails = (props) => {
  let movieArray = [];
  const allMoviesData = Object.values(props.location.allDataProps); // All Movie Data
  const title = Object.values(props.location.titleProp); // Title which was clicked

  allMoviesData.map((item) => {
    const movieData = item; // all movies data inside an array

    movieData.map((item, index) => {
      const moviesArray = Object.values(item[1]); // all movie details

      if (moviesArray[1] == title) {
        const singleMovieData = movieData[index][1]; // single movie data
        movieArray.push(Object.values(singleMovieData));
      }
    });
  });

  const history = useHistory();

  function handleClick() {
    history.push("/"); // To go back to Home
  }

  return (
    <div className="backgroundDetails">
      <h1>Movie Details</h1>
      <p className="HeadingStyle">
        <strong>ID:</strong> {movieArray[0][0]}
      </p>
      <p className="HeadingStyle">
        <strong>Title:</strong> {movieArray[0][1]}
      </p>

      <p className="HeadingStyle">
        <strong>Description:</strong> {movieArray[0][2]}
      </p>

      <p className="HeadingStyle">
        <strong>Director:</strong> {movieArray[0][3]}
      </p>

      <p className="HeadingStyle">
        <strong>Producer: </strong> {movieArray[0][4]}
      </p>

      <p className="HeadingStyle">
        <strong>Release Date:</strong> {movieArray[0][5]}
      </p>

      <p className="HeadingStyle">
        <strong>Rating:</strong> {movieArray[0][6]}
      </p>

      <p className="HeadingStyle">
        <strong>People:</strong> {movieArray[0][7]}
      </p>

      <p className="HeadingStyle">
        <strong>Species:</strong> {movieArray[0][8]}
      </p>

      <p className="HeadingStyle">
        <strong>Locations: </strong> {movieArray[0][9]}
      </p>

      <p className="HeadingStyle">
        <strong>Vehicles: </strong> {movieArray[0][10]}
      </p>

      <p className="HeadingStyle">
        <strong>URL: </strong> {movieArray[0][11]}
      </p>

      <button type="button" onClick={handleClick} className="HomeButton">
        Go home
      </button>
    </div>
  );
};

export default BookDetails;
