import React from "react";

// Définissez une interface pour vos props
interface CodeBlockProps {
  numberOfLines: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ numberOfLines }) => {
  // Votre extrait de code
  const codeSnippet = `
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
  javaScript: boolean;
  typescript: boolean;
  react: boolean;
  vue: boolean;
  git: boolean;
  testing: boolean;
  apiIntegration: boolean;
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
      <h1> Issa Dia </h1>
      <h2> FrontendDeveloper </h2>
      <h3> Technical Skills </h3>
      <SkillList skills = { techSkills } />
      <h3> Soft Skills </h3>
      <SkillList skills = { softSkills } />
    </div>
  );
};

export default Profile ;
`
    .trim()
    .split("\n"); // On divise le texte par ligne

  const renderColoredText = (text: string) => {
    const purple = ["import", "from", "{", "}", "export", "default", "return"];
    const orange = ['"./SkillList";'];
    const green = [
      "boolean;",
      "Skillist",
      "SoftSkillProps",
      "TechSkillProps",
      "<SkillList ",
      "Profile",
    ];

    const white = [";"];

    const regularBlue = [
      "interface",
      "const",
      "=>",
      "[]",
      "&lt;div&gt;",
      "&lt;h1&gt;",
      "&lt;h2&gt;",
      "&lt;h3&gt;",
      "{",
      "}",
    ];
    const parenthesis = ["(", ")", "Profile"];
    const skyBlue = [
      "SkillList",
      "techSkills",
      "softSkills",
      "props",
      "skills",
    ];
    const properties = [
      "problemSolving:",
      "communication:",
      "teamWork:",
      "adaptability:",
      "empathy:",
      "initiative:",
      "html:",
      "css:",
      "javaScript:",
      "typescript:",
      "react:",
      "vue:",
      "git:",
      "testing:",
      "apiIntegration:",
    ];

    let escapedText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const coloredText = escapedText
      .split(" ")
      .map((word) => {
        if (word.includes)
          if (word.includes("&lt;div&gt;")) {
            return word.replace(
              "&lt;div&gt;",
              `<span style="color: #4fc2ff;">&lt;div&gt;</span>`
            );
          }

        if (purple.includes(word)) {
          return `<span style="color: #b37aae;">${word}</span>`;
        } else if (skyBlue.includes(word.replace("{", "").replace("}", ""))) {
          return `<span style="color: #9bdafb;">${word}</span>`;
        } else if (orange.includes(word)) {
          return `<span style="color: #ce9178;">${word}</span>`;
        } else if (parenthesis.includes(word)) {
          return `<span style="color: #dadaa9;">${word}</span>`;
        } else if (properties.includes(word)) {
          return `<span style="color: #9cdcfe;">${word}</span>`;
        } else if (regularBlue.includes(word)) {
          return `<span style="color: #4fc2ff;">${word}</span>`;
        } else if (green.includes(word)) {
          return `<span style="color: #4dc9b0;">${word}</span>`;
        }
        console.log(word);

        return word;
      })
      .join(" ");

    return coloredText;
  };

  return (
    <div className="">
      <div style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
        {codeSnippet.slice(0, numberOfLines).map((line, index) => (
          <div key={index} style={{ display: "flex" }}>
            <span style={{ width: "50px", textAlign: "right" }}>
              {index + 1}
            </span>
            <span
              style={{ paddingLeft: "10px" }}
              dangerouslySetInnerHTML={{ __html: renderColoredText(line) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;
