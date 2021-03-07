import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <br />
      <Link to="/create-survey">
        <button>Create Survey</button>
      </Link>
      <br />
      <Link to="/take-survey">
        <button>Take Survey</button>
      </Link>
    </div>
  );
};

export default LandingPage;
