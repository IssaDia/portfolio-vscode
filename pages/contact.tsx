import CodeBlock from "../components/codeBlock/CodeBlock";

const codeSnippet = `/* join me on my journey */

.socials {
  email : issadiapro@gmail.com
  github : https://github.com/IssaDia
  linkedin : https://www.linkedin.com/in/issa-dia-dev/
  twitter/x : https://twitter.com/IssDiaDev
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
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
