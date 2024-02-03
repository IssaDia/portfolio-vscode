import CodeBlock from "../components/codeBlock/CodeBlock";
import Contact from "../components/contact/Contact";

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
      <div className="m-6 ipadLandscape:hidden">
        <div className="flex flex-row items-center text-menu-firstVariant mb-4 space-x-2 ">
          <h2 className="text-xs uppercase font-bold text-menu-firstVariant">
            Contact me
          </h2>
        </div>
        <Contact />
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
