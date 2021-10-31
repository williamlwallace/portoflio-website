import ExperienceCard from './ExperienceCard';

const Experience = (props) => {
  const { darkMode } = props;
  return (
    <div id="experience" className="section">
      <h1 className="section-title">Experience.</h1>

      {ExperienceCard("March 2021 - Present", "3PM", "Junior Software Engineer")}

      {ExperienceCard("2020 Summer", "Salt & Tonic", "Intern Software Engineer")}

    </div>
  );
};

export default Experience;
