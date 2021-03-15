import "../App.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

function Home() {
  return (
    <div id="home" className="home-section">
      <Container>
        <motion.div
          animate={{ scale: [1.1, 1], y: [20, 0] }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/images/profile.jpg"
            className="image"
            roundedCircle
          ></Image>
          <h1 className="home-title">
            Hi, my name is <span className="blue">William Wallace.</span>
          </h1>
          <h3 className="font-weight-300">
            <ReactRotatingText
              items={[
                "Software Engineer.",
                "Full Stack Developer.",
                "Aspiring Power Lifter.",
              ]}
            />
          </h3>
          <div className="home-buttons">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                className="sm-button"
                variant="icon"
                size="lg"
                href="mailto:williamwallace424@yahoo.co.nz"
              >
                <FaEnvelope size={32}></FaEnvelope>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                className="sm-button"
                variant="icon"
                size="lg"
                href="https://www.github.com/williamlwallace"
              >
                <FaGithub size={32}></FaGithub>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                className="sm-button"
                variant="icon"
                size="lg"
                href="https://www.linkedin.com/in/william-wallace-289a3b1a2/"
              >
                <FaLinkedin size={32}></FaLinkedin>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Home;
