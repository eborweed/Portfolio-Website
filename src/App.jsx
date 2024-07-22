import React from "react";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import AnimationTest from "./components/AnimationTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { useState } from "react";
<<<<<<< HEAD
import "./components/AnimCursor";
import { AnimCursor } from "./components/AnimCursor";
=======



import "./components/AnimCursor";
import { AnimCursor } from "./components/AnimCursor";

>>>>>>> refs/remotes/origin/new-js-version
// Provide initial values for the context
export const ThemeContext = React.createContext();
var defaultTheme = window.localStorage.getItem('theme'); 
// !! : cast to boolean
function App() {
<<<<<<< HEAD
  document.style="cursor:none;";
=======

  
  console.log(defaultTheme
  );

  document.style="cursor:none;";

>>>>>>> refs/remotes/origin/new-js-version
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
<<<<<<< HEAD
      <AnimCursor/>
=======
<<<<<<< HEAD
=======
      <AnimCursor/>
>>>>>>> main
>>>>>>> refs/remotes/origin/new-js-version
      <TopNavBar />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

