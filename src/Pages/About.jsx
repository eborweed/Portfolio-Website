import React, { useContext } from "react";
import {ThemeContext} from "../App";
import "./About.css";
//import "../components/DarkmodeSlider.css";

const About = () => {
  // Replace with the actual theme value
  const [theme,changeTheme]  = useContext(ThemeContext);
  theme=="dark"?document.body.style.setProperty("background", "#222", "important"):document.body.style.setProperty("background", "#eee", "important");
  var app = document.getElementById("root");
  var Typewriter = new(Typewriter)
  return (
    <>
      <img
        className="profile-photo"
        src="./assets/LiterallyMe.jpg"
        alt="Literally Me"
        id={theme}
      />
      <h1 className={"title"} id= {theme+"h1"}>About Me</h1>
<<<<<<< HEAD
      <body className="description"id={theme+"body"}>
      Hi my name is Ibrahim and I like playing Fortnite Sigma Tycoon<p>
      In my time off I like to cower in fear of women.
      </p>  
      </body>
=======
>>>>>>> 716f1941c8fff801bc6bb93127a6d34736113b7e
    </>
  );
};

export default About;
