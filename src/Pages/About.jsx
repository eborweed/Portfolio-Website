import { useContext } from "react";
import {ThemeContext} from "../App";
import "./About.css";
//import "../components/DarkmodeSlider.css";
import {IconCloudDemo} from "../components/IconCloud";
const About = () => {
  // Replace with the actual theme value
  const [theme]  = useContext(ThemeContext);
  //theme=="dark"?document.body.style.setProperty("background", "#ddd", "important"):document.body.style.setProperty("background", "#ccc", "important");

  return (
    <div className="icon-cloud-container" id={theme+"body"} > 
    
          <h1 className={"title"} id= {theme+"heading"}>About Me</h1>
      <img
        className="profile-photo"
        src="./assets/LiterallyMe.jpg"
        alt="Literally Me"
        id={theme}
      />
      <p className="about-text">Hi, I'm Ibrahim Waheed, a passionate Software Engineering student at the University of Auckland with a keen interest in web development, cloud technologies, 
      and innovative problem-solving. I enjoy creating responsive, interactive applications and exploring new ways to leverage technology to make a positive impact. 
      When I'm not coding, you'll find me mentoring peers, delving into the latest tech trends, or immersing myself in diverse cultures and art. 
      I'm always eager to learn, collaborate, and push the boundaries of what's possible.</p>
      
      <h1 className="title" id={theme+"text"}>Tech Stack:</h1>
<IconCloudDemo/>

    </div>
  );
};

export default About;
