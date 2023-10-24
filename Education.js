import "./EducationStyle.css";
import React from "react";

const Education = () => {
  return (
    <div className="educationContainer">
      <h1>EDUCATION</h1>
      <div className="educationContent">
        <div className="btech">
          <h2>Graduation</h2>
          <p>
            I'm a final year B.Tech student with Major area if study Information
            Technology{" "}
            <strong>Harcourt Butler Technical University, Kanpur</strong>. My
            overall CGPA is <strong>7.78</strong> till VI semester.
          </p>
        </div>
        <div className="intermediate">
          <h2>Intermediate</h2>
          <p>
            I have completed my intermediate from{" "}
            <strong>Kenbridge School, Kota</strong>and scored{" "}
            <strong>76.5% </strong>aggregate percentage.
          </p>
        </div>
        <div className="highschool">
          <h2>Highschool</h2>
          <p>
            I have comleted my highschool from{" "}
            <strong>Delhi Public School ,saharnpur </strong>and scored{" "}
            <strong>86.6% </strong>aggregate percentage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
