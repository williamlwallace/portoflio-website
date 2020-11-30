import Card from 'react-bootstrap/Card'
import Tilt from 'react-parallax-tilt'

function Projects() {
    return (
        <div id="projects" className="section">
            <div className="project-grid">
            <h1>Projects.</h1>
                <div className="project-row">
                <Tilt>
                    <Card className="project-card">
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>COKI Explorer</Card.Title>
                            <Card.Text>
                            My final year university project, working on developing a research publication search engine web application.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tilt>
                <Tilt>
                    <Card className="project-card">
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>TravelEA</Card.Title>
                            <Card.Text>
                                Full stack travel/social media application developed in a team of eight over an entire year.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tilt>
                </div>
                <div className="project-row">
                <Tilt>
                    <Card className="project-card">
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>COVIDaily</Card.Title>
                            <Card.Text>
                                Simple android app that shows statistics and news about the COVID-19 virus in your country.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tilt>
                <Tilt>
                    <Card className="project-card">
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>PocketCHEF</Card.Title>
                            <Card.Text>
                            Simple android app that allows you to add and view recipes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tilt>
                </div>
            </div>
        </div>
    );
  }
  
export default Projects;