import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props, imgSrc, title, desc, techStack, link) => {
  const { darkMode } = props;
  return (
    <Card className={darkMode.value ? "project-card dark" : "project-card"}>
      <Card.Img
        variant="top"
        className="project-card-img"
        src={imgSrc}
        alt={title}
      />
      <Card.Body>
        <Card.Title className="project-card-title">
          {title}
        </Card.Title>
        <Card.Text className="project-card-text">
          {desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{techStack}</small>
        <Button
          className={darkMode.value ? "project-button dark" : "project-button"}
          variant="icon"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard;