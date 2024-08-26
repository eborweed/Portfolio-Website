import "./TopNavBar.css";
import "./DarkmodeSlider.css";
import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { ThemeContext } from "../App.jsx";
import { Link } from "react-scroll";
import { Turtle } from "lucide-react";

function TopNavBar() {
  const [theme, changeTheme] = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topnav" id={theme}>
      <div className="menu-icon" id={theme+"text"} onClick={toggleMenu}>
        &#9776; {/* This is the hamburger menu icon */}
      </div>
      <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"} id={theme+"nav"}>
        <li className="home">
          <a href="/Home">
            <img
              src={theme === "light" ? "../../assets/IW_lightmode.png" : "../../assets/IW_darkmode.png"}
              alt="IW logo"
            />
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
            checked={theme === "dark"}
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
