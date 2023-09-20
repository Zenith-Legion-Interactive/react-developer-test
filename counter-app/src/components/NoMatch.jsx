import {Link} from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h2>404: This page could not be found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
};

export default NoMatch;
