import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import "./Projects.css";
import { motion } from "framer-motion";
import projects from "../projectinfo.jsx";

const Projects = () => {
  const [theme] = useContext(ThemeContext);
  theme === "dark"
    ? document.body.style.setProperty("background", "#222", "important")
    : document.body.style.setProperty("background", "#eee", "important");

  const [slide, setSlide] = useState(projects[0]);
  const [isVisible, setIsVisible] = useState(true);

  function changeSlide() {
    setIsVisible(false); // Trigger fade out
    setTimeout(() => {
      setSlide(slide === projects[0] ? projects[1] : projects[0]);
      setIsVisible(true); // Trigger fade in
    }, 500); // Adjust this timeout to match the duration of the fade-out animation
  }

  return (
    <>
      <div className="Text--Container">
        <div className="Projects">
          <motion.img
            className="slide"
            src={slide.imageSource}
            alt={slide.description}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="buttons">
            <button className="learn-more" onClick={changeSlide}>HAHa</button>
            <button className="learn-more" onClick={changeSlide}>HAHa</button>
          </div>
        </div>
        <motion.p animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }} className="text">{slide.description}</motion.p>
      </div>
    </>
  );
}

export default Projects;
