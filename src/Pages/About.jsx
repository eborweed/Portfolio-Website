import React, { useContext } from "react";
import {ThemeContext} from "../App";
import "./About.css";
//import "../components/DarkmodeSlider.css";
import {IconCloudDemo} from "../components/IconCloud";
const About = () => {
  // Replace with the actual theme value
  const [theme,changeTheme]  = useContext(ThemeContext);
  //theme=="dark"?document.body.style.setProperty("background", "#ddd", "important"):document.body.style.setProperty("background", "#ccc", "important");

  return (
    <div className="icon-cloud-container" id={theme+"body"} > 
    
          <h1 className={"title"} id= {theme+"h1"}>About Me</h1>
      <img
        className="profile-photo"
        src="./assets/LiterallyMe.jpg"
        alt="Literally Me"
        id={theme}
      />
      Lorem Ipsuum Dolor<p/>
      G
      
      <h1 className="title" id={theme+"body"}>Tech Stack:</h1>
<IconCloudDemo/>

    </div>
  );
};

export default About;
