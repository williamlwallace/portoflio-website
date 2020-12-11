import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import profile from '../profile1.jpg'
import ReactRotatingText from 'react-rotating-text'
import Tilt from 'react-parallax-tilt'
import '../App.css'

function Home() {
    return (
        <div id="home" className="section">
            <Container>
                <Tilt>
                    <Image src={profile} className="image" roundedCircle></Image>
                    <h1 className="font-weight-500">Hi, my name is William Wallace.</h1>
                    <h3 className="font-weight-300  "><ReactRotatingText items={['Software Engineer.', 'Full Stack Developer.', 'Front End Design Enthusia  st.']}/></h3>
                    <Button variant="icon" size="lg" href="mailto:williamwallace424@yahoo.co.nz">
                        <FaEnvelope size={32}></FaEnvelope>
                    </Button>
                    <Button variant="icon" size="lg" href="https://www.github.com/williamlwallace">
                        <FaGithub size={32}></FaGithub>
                    </Button>
                    <Button variant="icon" size="lg" href="https://www.linkedin.com/in/william-wallace-289a3b1a2/">
                        <FaLinkedin size={32}></FaLinkedin>
                    </Button>
                </Tilt>
                
            </Container>
        </div>
        
    );
  }
  
export default Home;