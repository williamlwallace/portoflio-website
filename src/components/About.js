import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaGit,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaNpm,
} from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from "react-bootstrap/Image";
import { motion } from "framer-motion";
import Emoji from "../utilities/Emoji";

function About() {
  return (
    <div id="about" className="section">
      <h1 className="section-title">About me.</h1>
      <div className="about-card">
        <p className="about-description">
          I am a soon to be graduate Software Engineer (w/ Honours) from the
          University of Canterbury. My passion is full stack development. I
          enjoy creating fluid, reactive and user-friendly applications. In my
          free time you will either find me working on side projects, gaming
          with friends or unracking four plate squats at the gym{" "}
          <Emoji symbol="🏋️" label="sheep" />.
        </p>
        <h4 className="about-skills-title">Languages, frameworks and tools</h4>
        <div className="about-skills">
          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>HTML5</Tooltip>}>
              <FaHtml5 size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>CSS</Tooltip>}>
              <FaCss3Alt size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>JavaScript</Tooltip>}>
              <FaJs size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>React / React-Native</Tooltip>}>
              <FaReact size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Node</Tooltip>}>
              <FaNodeJs size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Python</Tooltip>}>
              <FaPython size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Java</Tooltip>}>
              <FaJava size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>C</Tooltip>}>
              <Image
                style={{ width: 32 }}
                className="icon"
                src="/images/c.svg"
              />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>C++</Tooltip>}>
              <Image
                style={{ width: 32 }}
                className="icon"
                src="/images/c++.svg"
              />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>PHP</Tooltip>}>
              <FaPhp size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Laravel</Tooltip>}>
              <FaLaravel size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Kotlin</Tooltip>}>
              <Image
                style={{ width: 32 }}
                className="icon"
                src="/images/kotlin.svg"
              />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>SQL</Tooltip>}>
              <Image
                style={{ width: 32 }}
                className="icon"
                src="/images/sql.svg"
              />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Firebase</Tooltip>}>
              <Image
                style={{ width: 32 }}
                className="icon"
                src="/images/firebase.svg"
              />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Git</Tooltip>}>
              <FaGit size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <OverlayTrigger overlay={<Tooltip>Npm</Tooltip>}>
              <FaNpm size={32} className="icon" />
            </OverlayTrigger>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
