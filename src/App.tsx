import React from "react";
import Typed from "react-typed";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import AnimationTest from "./components/AnimationTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <TopNavBar />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
