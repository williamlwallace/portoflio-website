import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-reveal";

function Projects() {
  return (
    <div id="projects" className="section">
      <Fade>
        <h1>Some Past Projects.</h1>
        <div className="project-flex">
          <div className="project-row">
            <Tilt>
              <a
                className="project-link"
                href="https://github.com/williamlwallace/Final-Year-Project"
              >
                <Card className="project-card">
                  <Card.Img
                    variant="top"
                    className="project-card-img"
                    src="/images/cokiexplorer.png"
                  />
                  <Card.Body>
                    <Card.Title className="project-card-title">
                      COKI Explorer
                    </Card.Title>
                    <Card.Text className="project-card-text font-weight-300">
                      My final year university project, developing a research
                      publication search engine web application using React and
                      Redux.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Tilt>
            <Tilt>
              <a
                className="project-link"
                href="https://github.com/williamlwallace/TravelEA"
              >
                <Card className="project-card">
                  <Card.Img
                    variant="top"
                    className="project-card-img"
                    src="/images/travelea3.png"
                  />
                  <Card.Body>
                    <Card.Title className="project-card-title">
                      TravelEA
                    </Card.Title>
                    <Card.Text className="project-card-text font-weight-300">
                      Full stack travel/social media web application developed
                      in a team of eight during my third year at University.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Tilt>
          </div>
          <div className="project-row">
            <Tilt>
              <a
                className="project-link"
                href="https://github.com/williamlwallace/COVIDaily"
              >
                <Card className="project-card">
                  <Card.Img
                    variant="top"
                    className="project-card-img"
                    src="/images/covidaily.png"
                  />
                  <Card.Body>
                    <Card.Title className="project-card-title">
                      COVIDaily
                    </Card.Title>
                    <Card.Text className="project-card-text font-weight-300">
                      Simple android app built using Kotlin that retireves and
                      displays relevant statistics/news about the COVID-19 virus
                      in your country.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Tilt>
            <Tilt>
              <a
                className="project-link"
                href="https://github.com/williamlwallace/PocketCHEF"
              >
                <Card className="project-card">
                  <Card.Img
                    variant="top"
                    className="project-card-img"
                    src="/images/pocketchef.png"
                  />
                  <Card.Body>
                    <Card.Title className="project-card-title">
                      PocketCHEF
                    </Card.Title>
                    <Card.Text className="project-card-text font-weight-300">
                      Simple android app built using Kotlin that allows you to
                      create, view and share cooking/baking recipes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Tilt>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
