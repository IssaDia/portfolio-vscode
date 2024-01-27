import SkillList from "./SkillList";

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
      <SkillList skills={techSkills} />
      <h3>Soft Skills</h3>
      <SkillList skills={softSkills} />
    </div>
  );
};

export default Profile;
