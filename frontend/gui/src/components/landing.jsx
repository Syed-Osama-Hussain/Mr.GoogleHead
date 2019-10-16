import React from "react";
import "../main.css";

const Landing = () => {
  return (
    <React.Fragment>
      <div id="landing-header">
        <h1>Welcome to GoogleHead!</h1>
        <hr className="hr" />
        <a href="/chat" className="btn btn-lg btn-success">
          Let's Chat!
        </a>
      </div>

      <ul className="slideshow">
        <li />
        <li />
        <li />
      </ul>
    </React.Fragment>
  );
};

export default Landing;
