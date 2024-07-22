import React, { useContext } from "react";
import {ThemeContext} from "../App";
import "./About.css";
//import "../components/DarkmodeSlider.css";

const About = () => {
  // Replace with the actual theme value
  const [theme,changeTheme]  = useContext(ThemeContext);
  theme=="dark"?document.body.style.setProperty("background", "#222", "important"):document.body.style.setProperty("background", "#eee", "important");
  return (
    <>
      <img
        className="profile-photo"
        src="./assets/LiterallyMe.jpg"
        alt="Literally Me"
        id={theme}
      />
<<<<<<< HEAD
      <h1 className={"title"} id= {theme+"h1"}>About Me</h1>
=======
<<<<<<< HEAD
      <h1 className="title" id= {theme+"text"}>About Me</h1>
=======
      <h1 className={"title"} id= {theme+"h1"}>About Me</h1>
      <p className="about-text" id={theme+"p"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
      A diam sollicitudin tempor id eu nisl nunc mi. Nec dui nunc mattis enim ut. <br/>
      Auctor eu augue ut lectus arcu. Adipiscing bibendum est ultricies integer quis auctor elit sed.<br/>
       Urna molestie at elementum eu facilisis. Et malesuada fames ac turpis egestas integer eget aliquet. <br/>
       Sem et tortor consequat id porta nibh venenatis cras sed. <br/>
       Tortor at auctor urna nunc. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit.<br/>
        Leo duis ut diam quam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. <br/>
        Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
>>>>>>> main
>>>>>>> refs/remotes/origin/new-js-version
    </>
  );
};

export default About;
