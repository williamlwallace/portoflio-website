// import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = props => {
  return (
    <div id="projects" className="section">
      <h1 className="section-title">Past projects.</h1>
      <div className="project-card-deck">
        {ProjectCard(props, "/images/cokiexplorer1.png", "COKI Explorer", "My final year university project, developing a research publication search engine using React and Redux.", "React • Redux • Firebase", "https://github.com/williamlwallace/coki-explorer")}
        {ProjectCard(props, "/images/travelea.png", "TravelEA", "Full stack travel/social media web application developed in a team of eight using agile methodologies during my third year at University.", "HTML5 • CSS • JavaScript • Java", "https://github.com/williamlwallace/travel-ea")}
        {ProjectCard(props, "/images/crypto-bot.png", "CryptoBot", "Discord bot and separate API that can be used to quickly retrieve crypto prices, data and more!", "Python • Node.js", "https://github.com/williamlwallace/crypto-bot")}
        {ProjectCard(props, "/images/rogur.png", "rogur", "rogur is a clone of the Uber app built using a MERN stack", "React Native • Redux • Express • MongoDB", "https://github.com/williamlwallace/rogur")}      
        {ProjectCard(props, "/images/covidaily1.png", "COVIDaily", "Simple android app built using Kotlin that retireves and displays relevant statistics/news about COVID-19 in your country.", "Kotlin", "https://github.com/williamlwallace/covid-daily")}
        {ProjectCard(props, "/images/pocketchef1.PNG", "PocketCHEF", "Simple android app built using Kotlin that allows you to create, view and share cooking/baking recipes.", "Kotlin • Firebase", "https://github.com/williamlwallace/pocket-chef")}
      </div>

      <h4 className="mt-5">
        More on my{" "}
        <a
          className="a-blue"
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
