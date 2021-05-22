import React from "react";

import SchemeImage from "../images/scheme.png";

const About = () => {
  return (
    <div className="About">
      <div className="text">
        <p>
          The aim of this application is to help you visualize your
          tasks/projects, so you can prioritize them better and choose what{" "}
          <b>really maters</b> and <b>makes</b> a difference.
        </p>
        <p>Look at the diagram ⏬ below to get the gist of how it works:</p>
      </div>
      <img className="image" src={SchemeImage} alt="" />
    </div>
  );
};

export default About;
