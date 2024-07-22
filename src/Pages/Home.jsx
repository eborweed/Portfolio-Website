import { useContext } from "react";
import AnimationTest from "../components/AnimationTest";
import { ThemeContext } from "../App";
function Home() {
const theme= useContext(ThemeContext)[0];
  theme=="dark"?document.body.style.setProperty("background", "#222", "important"):document.body.style.setProperty("background", "#eee", "important");
  return <AnimationTest />;
}
export default Home;
