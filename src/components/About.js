import { Tooltip } from "react-bootstrap";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaGit,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaNode,
} from "react-icons/fa";
import { Fade, Bounce } from "react-reveal";

function About() {
  return (
    <div id="about" className="section">
      <Fade>
        <h1>About me.</h1>
      </Fade>
      <Fade>
        <div className="about-flex">
          <div className="about-card">
            <p className="font-weight-300">
              I am a final year Software Engineering student at the University
              of Canterbury working towards my Bachelor of Engineering (w/
              Honours). My passion is web development, I have a special interest
              torwards developing fluid, reactive and user-friendly
              applications. I enjoy working in team-based projects.
          </p>
            <h4>Languages, frameworks and tools</h4>
            <div className="spacing">
              <FaPython size={32} className="icon" />
              <FaJava size={32} className="icon" />
              <FaJs size={32} className="icon" />
              <FaHtml5 size={32} className="icon" />
              <FaGit size={32} className="icon" />
              <FaReact size={32} className="icon" />
              <FaVuejs size={32} className="icon" />
              <FaNode size={32} className="icon" />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
