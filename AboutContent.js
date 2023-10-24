import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from "react";
import React1 from "../Images/react1.jpg";
import React2 from "../Images/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I ?</h1>
        <p>
          I am an engineering undergrad, with a keen interest in leveraging
          technology to solve real-world problems. With a background in
          Information Technology and a flair for creativity.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
