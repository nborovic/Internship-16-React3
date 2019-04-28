import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/dogs">Dogs</Link>
      <br />
      <Link to="/cats">Cats</Link>
    </>
  );
};

export default Home;
