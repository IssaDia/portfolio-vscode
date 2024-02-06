import React from "react";
import CodeBlock from "../components/codeBlock/CodeBlock";

const codeSnippet = `<!DOCTYPE html>
<html lang = "en" >
  <head>
    <meta charset = "UTF-8" />
    <meta http-equiv "X-UA-Compatible" content = "IE=edge" />
    <title>About Me</title>
  </head>
  <body>
    <p>Issa has been actively involved in front-end development projects for two years</p> 
    <p>He is passionate about coding and wants to participate in ambitious projects related to his skills.</p>
    <p>He likes to find the right tool to resolve technical challenges.</p>
    <p>On his spare time he continues to learn about a lot of subjects.</p>
  </body>
</html>`;

const About = () => {
  return (
    <div>
      <CodeBlock
        numberOfLines={codeSnippet.split("\n").length}
        codeSnippet={codeSnippet}
        type="html"
      />
    </div>
  );
};

export default About;

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}
