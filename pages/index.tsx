import CodeBlock from "../components/codeBlock/CodeBlock";

const codeSnippet = `import SkillList from "./SkillList";

interface TechSkillProps {
  javaScript: boolean;
  typescript: boolean;
  react: boolean;
  vue: boolean;
  git: boolean;
  testing: boolean;
  apiIntegration: boolean;
}

interface SoftSkillProps {
  problemSolving: boolean;
  communication: boolean;
  teamWork: boolean;
  adaptability: boolean;
  empathy: boolean;
  initiative: boolean;
}

const Profile = ( {
  techSkills ,
  softSkills ,
} : {
  techSkills : TechSkillProps [] ;
  softSkills : SoftSkillProps [] ;
} ) => {
  return (
    <div>
      <h1>Issa Dia</h1>
      <h2>Frontend Developer</h2>
      <h3>Technical Skills</h3>
      <SkillList skills = {techSkills} />
      <h3>Soft Skills</h3>
      <SkillList skills = {softSkills} />
    </div>
  ) ;
} ;
export default Profile ;`;

export default function Home() {
  return (
    <div className="cursor-pointer overflow-y-auto overflow-x-auto">
      <CodeBlock
        numberOfLines={codeSnippet.split("\n").length}
        codeSnippet={codeSnippet}
        type="tsx"
      />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
