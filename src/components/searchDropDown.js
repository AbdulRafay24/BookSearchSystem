import React from 'react';
// import { ListGroup } from "react-bootstrap";
import './styling.css';

const searchDropDown = (props) => {
  console.log(props.booksData);

  // let pp = JSON.parse(JSON.stringify(props.booksD));

  // let arr = props.booksD;
  // console.log(arr);

  // let arr = Object.entries(props);
  // console.log(arr);
  // let arr2 = arr[0][1];
  // console.log(arr2);

  // arr2.map((arr3) => {
  //   return arr3;
  // });

  // console.log(props);
  // console.log(typeof props);
  // //   const books = props.books;
  // const arr = Object.entries(props.books);

  // for (let i of props.booksData) {
  //   console.log(i);
  // }

  return (
    <div>
      <ul>
        {props.booksData !== 'Loading...'
          ? props.booksData.map((item) => {
              return <li>{item}</li>;
            })
          : ''}
      </ul>
    </div>
  );
};

export default searchDropDown;
