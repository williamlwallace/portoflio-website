import { Tooltip } from 'react-bootstrap'
import {FaPython, FaJava, FaJs, FaHtml5, FaGit, FaReact, FaVuejs, FaNodeJs, FaNode} from 'react-icons/fa'

function About() {
    return (
        <div id="about" className="section">
            <div className="card">
                <h1>About me.</h1>
                <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.
                Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.</p>

                <h4>Languages, frameworks and tools</h4>
                <div className="spacing">
                    <FaPython size={32} className="icon"/>
                    <FaJava size={32} className="icon"/>
                    <FaJs size={32} className="icon"/>
                    <FaHtml5 size={32} className="icon"/>
                    <FaGit size={32} className="icon"/>
                    <FaReact size={32} className="icon"/>
                    <FaVuejs size={32} className="icon"/>
                    <FaNode size={32} className="icon"/>

                </div>
                
            </div>

        </div>
    );
  }
  
export default About;