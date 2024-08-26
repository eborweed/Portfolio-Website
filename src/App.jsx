import React from "react";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { useState } from "react";
import "./components/AnimCursor";
import { AnimCursor } from "./components/AnimCursor";
import Contacts from "./Pages/Contacts";
// Provide initial values for the context
export const ThemeContext = React.createContext();
var defaultTheme = window.localStorage.getItem('theme'); 
// !! : cast to boolean
function App() {
  document.style="cursor:none;";
  const [theme, setTheme] = useState(defaultTheme === "dark" ? "dark" : "light");
  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    

    if (theme === "dark") {
      localStorage.setItem('theme', "light");
      defaultTheme = window.localStorage.getItem('theme'); 
      document.getElementsByClassName("form-check-input")[0].checked = false;
      document.body.style.setProperty("background", "#eeeeee", "important");
      document.body.style.setProperty(
        "transition",
        "background 0.5s",
        "important"
      );
    } else if(theme === "light") {
      localStorage.setItem('theme', "dark");
      defaultTheme = window.localStorage.getItem('theme'); 
 
      document.body.style.setProperty("background", "#222222", "important");
      document.body.style.setProperty(
        "transition",
        "background 0.5s",
        "important"
      ); 
      document.getElementsByClassName("form-check-input")[0].checked = true;
    }
  }
  return (
    <ThemeContext.Provider value={[ theme, changeTheme ]}>
      <div className="main-container">
      <AnimCursor/>
        <TopNavBar />
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;

