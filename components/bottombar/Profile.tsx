interface SoftSkillProps {
  problemSolving: boolean;
  communication: boolean;
  teamWork: boolean;
  adaptability: boolean;
  empathy: boolean;
  initiative: boolean;
}

interface TechSkillProps {
  html: boolean;
  css: boolean;
  javaScript: boolean;
  typescript: boolean;
  react: boolean;
  vue: boolean;
  git: boolean;
  responsiveDesign: boolean;
  testing: boolean;
  apiIntegration: boolean;
}

const Profile = ({
  techSkills,
  softSkills,
}: {
  techSkills: TechSkillProps[];
  softSkills: SoftSkillProps[];
}) => {
  return (
    <div>
      <h1>Issa Dia</h1>
      <h2>FrontendDeveloper</h2>
      <h3>Technical Skills</h3>
      {Object.entries(techSkills).map(([techSkill]) => (
        <p key={techSkill}>{techSkill}</p>
      ))}
      <h3>Soft Skills</h3>
      {Object.entries(softSkills).map(([softSkill]) => (
        <p key={softSkill}>{softSkill}</p>
      ))}
    </div>
  );
};

export default Profile;
