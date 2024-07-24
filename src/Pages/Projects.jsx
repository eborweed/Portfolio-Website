import React, { useContext } from "react";
import {ThemeContext} from "../App";
import "./Projects.css";
import { useState } from "react";
const Projects=() => {
    const [theme,changeTheme]  = useContext(ThemeContext);
  theme=="dark"?document.body.style.setProperty("background", "#222", "important"):document.body.style.setProperty("background", "#eee", "important");
  const [slide,setSlide]=useState(1);
  function changeSlide() {
    setSlide(slide === 1 ? 2 : 1);
  }
  
  return (
    <div className="Projects">
      
      <img
      className="slide"
        src={"./assets/Project"+slide+".png"}
        alt="Literally Me"
      />
      <button className="learn-more" onClick={changeSlide}>HAHa</button>
    </div>
  );
}
export default Projects;