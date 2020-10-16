import React from "react";
// import { ListGroup } from "react-bootstrap";
import "./styling.css";

const searchDropDown = (props) => {
  return (
    <>
      <ul>
        {props.booksData !== "Loading..."
          ? props.booksData.map((item, index) => {
              return (
                <li
                  key={`${index}${item}`}
                  onClick={() => props.onClick(index, item)}
                >
                  {index + 1}.{" " + item}
                </li>
              );
            })
          : "Loading..."}
      </ul>
    </>
  );
};

export default searchDropDown;
