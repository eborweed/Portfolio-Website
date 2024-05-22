import React, { useContext } from "react";
import { ThemeContext } from "../components/TopNavBar.js";
import "./About.css";
import "../components/DarkmodeSlider.css";

const About = () => {
  // Replace with the actual theme value

  return (
    <>
      <img
        className="profile-photo"
        src="./assets/LiterallyMe.jpg"
        alt="Literally Me"
        id={"sdf"}
      />
      <h1 className="title">About Me</h1>
    </>
  );
};

export default About;
