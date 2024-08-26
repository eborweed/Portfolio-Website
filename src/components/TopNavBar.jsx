import "./TopNavBar.css";
import "./DarkmodeSlider.css";
import { useContext, } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import {ThemeContext} from "../App.jsx";
import { Link } from "react-scroll"; // Import the Link component from react-scroll library

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
          <Link to="about">About Me</Link>
          </button>
        </li>

        <li className="projects">
          <button>
          <Link to="projects">Projects</Link>
          </button>
        </li>
        <li className="contact">
          <button>
          <Link to="contacts">Links</Link>
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
