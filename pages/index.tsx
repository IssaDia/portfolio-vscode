import CodeBlock from "../components/codeBlock/CodeBlock";

export default function Home() {
  return (
    <div className="cursor-pointer">
      <CodeBlock numberOfLines={43} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
