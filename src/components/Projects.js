import Card from 'react-bootstrap/Card'
import Tilt from 'react-parallax-tilt'

function Projects() {
    return (
        <div id="projects" className="section">
            <div className="project-grid">
                <h1>Projects.</h1>
                <div className="project-row">
                    <Tilt>
                        <a className="project-link" href="https://github.com/williamlwallace/Final-Year-Project">
                            <Card className="project-card">
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title className="project-card-title">COKI Explorer</Card.Title>
                                    <Card.Text className="project-card-text font-weight-300">
                                        My final year university project, developing a research publication search engine web application using React and Redux.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Tilt>
                    <Tilt>
                        <a className="project-link" href="https://github.com/williamlwallace/TravelEA">
                            <Card className="project-card">
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title className="project-card-title">TravelEA</Card.Title>
                                    <Card.Text className="project-card-text font-weight-300">
                                        Full stack travel/social media web application developed in a team of eight during my third year at University.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Tilt>
                </div>
                <div className="project-row">
                    <Tilt>
                        <a className="project-link" href="https://github.com/williamlwallace/COVIDaily">
                            <Card className="project-card">
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title className="project-card-title">COVIDaily</Card.Title>
                                    <Card.Text className="project-card-text font-weight-300">
                                        Simple android app built using Kotlin that shows statistics and news about the COVID-19 virus in your country.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Tilt>
                    <Tilt>
                        <a className="project-link" href="https://github.com/williamlwallace/PocketCHEF">
                            <Card className="project-card">
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title className="project-card-title">PocketCHEF</Card.Title>
                                    <Card.Text className="project-card-text font-weight-300">
                                        Simple android app built using Kotlin that allows you to create and view cooking recipes.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Projects;