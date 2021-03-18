import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = props => {
  const { darkMode } = props;
  return (
    <div id="projects" className="section">
      <h1 className="section-title">Past projects.</h1>
      <div className="project-card-deck">
        <Card className={darkMode.value ? "project-card-dark" : "project-card-light"}>
          <Card.Img
            variant="top"
            className="project-card-img"
            src="/images/cokiexplorer.png"
            alt="COKI Explorer"
          />
          <Card.Body>
            <Card.Title className="project-card-title">
              COKI Explorer
            </Card.Title>
            <Card.Text className="project-card-text">
              My final year university project, developing a research
              publication search engine using React and Redux.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">React • Redux • Firebase</small>
            <Button
              className="project-button"
              variant="icon"
              href="https://github.com/williamlwallace/Final-Year-Project"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Button>
          </Card.Footer>
        </Card>

        <Card className={darkMode.value ? "project-card-dark" : "project-card-light"}>
          <Card.Img
            variant="top"
            className="project-card-img"
            src="/images/travelea3.PNG"
            alt="TravelEA"
          />
          <Card.Body>
            <Card.Title className="project-card-title">TravelEA</Card.Title>
            <Card.Text className="project-card-text">
              Full stack travel/social media web application developed in a team
              of eight using agile methodologies during my third year at
              University.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">HTML5 • JavaScript • Java</small>
            <Button
              className="project-button"
              variant="icon"
              href="https://github.com/williamlwallace/TravelEA"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Button>
          </Card.Footer>
        </Card>

        <Card className={darkMode.value ? "project-card-dark" : "project-card-light"}>
          <Card.Img
            variant="top"
            className="project-card-img"
            src="/images/covidaily.png"
            alt="COVIDaily"
          />
          <Card.Body>
            <Card.Title className="project-card-title">COVIDaily</Card.Title>
            <Card.Text className="project-card-text">
              Simple android app built using Kotlin that retireves and displays
              relevant statistics/news about COVID-19 in your country.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Kotlin</small>
            <Button
              className="project-button"
              variant="icon"
              href="https://github.com/williamlwallace/COVIDaily"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Button>
          </Card.Footer>
        </Card>

        <Card className={darkMode.value ? "project-card-dark" : "project-card-light"}>
          <Card.Img
            variant="top"
            className="project-card-img"
            src="/images/pocketchef.PNG"
            alt="PocketCHEF"
          />
          <Card.Body>
            <Card.Title className="project-card-title">PocketCHEF</Card.Title>
            <Card.Text className="project-card-text">
              Simple android app built using Kotlin that allows you to create,
              view and share cooking/baking recipes.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Kotlin • Firebase</small>
            <Button
              className="project-button"
              variant="icon"
              href="https://github.com/williamlwallace/PocketCHEF"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Button>
          </Card.Footer>
        </Card>

        {/* <Card className="project-card">
          <Card.Img
            variant="top"
            className="project-card-img"
            src="/images/pocketchef.PNG"
          />
          <Card.Body>
            <Card.Title className="project-card-title">rogur.</Card.Title>
            <Card.Text className="project-card-text font-weight-400">
              Uber clone built using React Native
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">React Native • Redux • Express • MongoDB</small>
            <Button className="project-button" variant="icon" href="https://github.com/williamlwallace/PocketCHEF"><FaGithub size={24}/></Button>
          </Card.Footer>
        </Card> */}
      </div>

      <h4 className="mt-5">
        More on my{" "}
        <a
          className="blue-href"
          href="https://github.com/williamlwallace?tab=repositories"
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub.
        </a>
      </h4>
    </div>
  );
}

export default Projects;
