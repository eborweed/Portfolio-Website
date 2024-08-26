import "./TopNavBar.css";
import "./DarkmodeSlider.css";
import { useContext, } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import {ThemeContext} from "../App.jsx";

// Provide initial values for the context

function TopNavBar() {
  // Returns the top navigation bar with the logo, and the links to the other pages
  const [theme, changeTheme] = useContext(ThemeContext);

  return (
    <div className="topnav" id={theme}>
      <ul>
        <li className="home">
          <a href="/Home">
            <img src={theme==="light"?"../../assets/IW_lightmode.png":"../../assets/IW_darkmode.png"} alt="IW logo" />
          </a>
        </li>

        <li className="about">
          <button>
            <a href="/About">About </a>
          </button>
        </li>

        <li className="projects">
          <button>
            <a href="/Projects">Projects</a>
          </button>
        </li>
        <li className="contact">
          <button>
            <a href="#contact">Links</a>
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
            checked={theme === "dark" ? true : false}
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
