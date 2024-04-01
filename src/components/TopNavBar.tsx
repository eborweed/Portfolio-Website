import "./TopNavBar.css";
import "./DarkmodeSlider.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../main.tsx";
import "../App.css";

function TopNavBar() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme == "dark") {
      document.body.style =
        "background: #eeeeee !important; transition: background 0.5s;";
    } else {
      document.body.style =
        "background: #222222 !important;transition: background 0.5s";
    }
  }
  return (
    <div className="topnav" id={theme}>
      <ul>
        <li className="home">
          <a href="#home">
            <img src={"../assets/IW_" + theme + "mode.png"} alt="Hello World" />
          </a>
        </li>

        <li className="about">
          <button>
            <a href="#about">About </a>
          </button>
        </li>

        <li className="projects">
          <button>
            <a href="#projects">Projects</a>
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
  );
}

export default TopNavBar;
