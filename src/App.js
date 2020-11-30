import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from 'particles-bg'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ParticlesBg color={"#434343"} type="cobweb" bg={true}/>
      <Container>
        <Navbar fixed="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
