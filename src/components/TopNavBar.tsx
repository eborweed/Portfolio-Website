import "./TopNavBar.css";
import "./DarkmodeSlider.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../main.tsx";
import "../App.css";
export const ThemeContext = React.createContext({});

// Provide initial values for the context

function TopNavBar() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    if (theme === "dark") {
      document.body.setAttribute(
        "style",
        "background: #eeeeee !important; transition: background 0.5s;"
      );
    } else {
      document.body.setAttribute(
        "style",
        "background: #222222 !important;transition: background 0.5s"
      );
    }
  };
  // Returns the top navigation bar with the logo, and the links to the other pages
  return (
    <ThemeContext.Provider value={theme}>
      <div className="topnav" id={theme}>
        <ul>
          <li className="home">
            <a href="/Home">
              <img src={"./assets/IW_" + theme + "mode.png"} alt="IW logo" />
            </a>
          </li>

          <li className="about">
            <button>
              <a href={"/About"}>About </a>
            </button>
          </li>

          <li className="projects">
            <button>
              <a href="/projects">Projects</a>
            </button>
          </li>
          <li className="contact">
            <button>
              <a href="#contact">Contacts</a>
            </button>
          </li>
          <li className="DayNightSlider">
            <input
              content=""
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={() => changeTheme()}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </li>
        </ul>
      </div>
    </ThemeContext.Provider>
  );
}
export default TopNavBar;
