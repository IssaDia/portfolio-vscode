import CodeBlock from "../components/codeBlock/CodeBlock";

const codeSnippet = `/* join me on my journey */

.socials {
  website : https://issaa.dev
  email : issadiapro@gmail.com
  github : https://github.com/IssaDia
  linkedin : https://www.linkedin.com/in/issa-dia-dev/
  x : https://twitter.com/IssDiaDev
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
