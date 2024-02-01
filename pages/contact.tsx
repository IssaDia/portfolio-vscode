import CodeBlock from "../components/codeBlock/CodeBlock";
import Contact from "../components/contact/Contact";

const codeSnippet = `/* join me on my journey */

.socials {
  website : https://issadia.io
  email : issadiapro@gmail.com
  github : https://github.com/IssaDia
  linkedin : https://www.linkedin.com/in/issa-dia-dev/
  x : https://twitter.com/IssDiaDev
  notion : https://www.notion.so/Veille-Techno-Issa-2572f315bd9348c3a13dcb8b8c3cdb0d
  medium : https://medium.com/@issadia
}`;

const ContactPage = () => {
  return (
    <>
      <div className="cursor-pointer">
        <CodeBlock
          numberOfLines={codeSnippet.split("\n").length}
          codeSnippet={codeSnippet}
          type="css"
        />
      </div>
      <Contact />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
