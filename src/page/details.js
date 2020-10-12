import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const bookDetails = (props) => {
  console.log("Details", props.location.aboutProps);
  return <div>Details</div>;
};

export default bookDetails;
