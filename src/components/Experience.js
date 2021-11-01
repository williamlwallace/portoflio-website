import ExperienceCard from './ExperienceCard';

const Experience = props => {
  return (
    <div id="experience" className="section">
      <h1 className="section-title">Experience.</h1>

      {ExperienceCard(props, "March 2021 - Present", "3PM Business Automation", "Junior Software Engineer")}

      {ExperienceCard(props, "2020 Summer", "Salt & Tonic", "Intern Software Engineer")}

    </div>
  );
};

export default Experience;
