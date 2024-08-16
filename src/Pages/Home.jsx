import { useContext } from "react";
import AnimationTest from "../components/AnimationTest";
import { ThemeContext } from "../App";
import "./Home.css";
function Home() {
const theme= useContext(ThemeContext)[0];
  theme=="dark"?document.body.style.setProperty("background", "#222", "important"):document.body.style.setProperty("background", "#eee", "important");
  return <div className="home-container"><AnimationTest /></div>;
}
export default Home;
