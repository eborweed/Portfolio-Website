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

  function nextSlide() {
    setIsVisible(false); // Trigger fade out
    setTimeout(() => {
      setSlide((slide) => {
        const currentIndex = projects.indexOf(slide);
        const nextIndex = (currentIndex + 1) % projects.length;
        return projects[nextIndex];
      });
      setIsVisible(true); // Trigger fade in
    }, 500); // Adjust this timeout to match the duration of the fade-out animation
  }

  function previousSlide() {
    setIsVisible(false); // Trigger fade out
    setTimeout(() => {
      setSlide((slide) => {
        const currentIndex = projects.indexOf(slide);
        const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
        return projects[previousIndex];
      });
      setIsVisible(true); // Trigger fade in
    }, 500); // Adjust this timeout to match the duration of the fade-out animation
  }

  return (
    <>
      <div className="Text--Container">
        <div className="Projects">
          <div className="TextSlide">
            <h1 id={theme + "heading"}> Projects </h1>
            <motion.h2
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              id={theme + "text"}
            >
              {slide.name}
            </motion.h2>
            <motion.img
              className="slide"
              src={slide.imageSource}
              alt={slide.description}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text"
              id={theme + "text"}
            >
              {slide.description}
            </motion.p>
            <motion.p
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text"
              id={theme + "text"}
            >
              {"Tech stack: " + slide.techStack.join(", ")}
            </motion.p>
            {slide.link && (
              <motion.p
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="text"
                id={theme + "text"}
              >
                {"Link: "}
                <a href={slide.link}>{slide.link}</a>
              </motion.p>
            )}
          </div>
          <div className="buttons">
            <button className="learn-more" onClick={previousSlide}>
              Back
            </button>
            <button className="learn-more" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
