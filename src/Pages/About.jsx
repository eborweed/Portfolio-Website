import React, { useContext } from "react";
import {ThemeContext} from "../App";
import "./About.css";
//import "../components/DarkmodeSlider.css";

const About = () => {
  // Replace with the actual theme value
  const [theme,changeTheme]  = useContext(ThemeContext);
  theme=="dark"?document.body.style.setProperty("background", "#222", "important"):document.body.style.setProperty("background", "#eee", "important");

  return (
    <>
      <img
        className="profile-photo"
        src="./assets/LiterallyMe.jpg"
        alt="Literally Me"
        id={theme}
      />
      <h1 className={"title"} id= {theme+"h1"}>About Me</h1>
      <body className="description"id={theme+"body"}>
      Hi my name is Ibrahim and I like playing Fortnite Sigma Tycoon<p/>
      In my time off I like to cower in fear of women.
      
      </body>

    </>
  );
};

export default About;
