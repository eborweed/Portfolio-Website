import "./TopNavBar.css";
import "./DarkmodeSlider.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../main.tsx";
function TopNavBar() {
  return (
    <div className="topnav">
      <ul>
        <li className="home">
          <a href="#home">
            <img src="../assets/IW_darkmode.png" alt="Hello World" />
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
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
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
