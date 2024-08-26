import { ThemeContext } from "../App";
import { useContext } from "react";
import "./Contacts.css";
export default function Contacts() {
    const [theme]  = useContext(ThemeContext);
    return (
        // Add your expression here
        <div className="contact-container" id={theme+"body"}>
            <h1 className="contact-heading" id ={theme+"heading"} >Contacts</h1>
            <div className="contact-info">
            <a href="tel:0212928253"><p id={theme+"text"}>Phone: 0212928253</p></a>
            <a href="https://www.linkedin.com/in/ibrahim-waheed-24a334294/"><p id={theme+"text"}>Linkedin: Ibrahim Waheed</p></a>
            <a href="mailto:ibrahimwaheed8@gmail.com"><p id={theme+"text"}>Email: ibrahimwaheed8@gmail.com</p></a>
            <a href="https://www.github.com/eborweed"><p id={theme+"text"}>Github: eborweed</p></a>
            </div>
        </div>
    );
}