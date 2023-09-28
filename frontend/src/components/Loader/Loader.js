import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";

function Loader() {
  return (
    <div className="centered-spinner-container" data-testid="loading-spinner">
      <Spinner />
    </div>
  );
}

export default Loader;
