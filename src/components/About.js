import { Tooltip } from 'react-bootstrap'
import { FaPython, FaJava, FaJs, FaHtml5, FaGit, FaReact, FaVuejs, FaNodeJs, FaNode } from 'react-icons/fa'

function About() {
    return (
        <div id="about" className="section">
            <div className="project-grid">
                <h1>About me.</h1>
                <div className="about-card">
                    <p className="font-weight-300">I am about to graduate from the University of Canterbury with a Bachelor of Software Engineering with Honours. I love creating web applications and have enthusiasm torwards developing fluid, reactive and good-looking front-ends. I am a keen gymmer, training to hopefully compete in power-lifting competitions.</p>
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
        </div>
    );
}

export default About;