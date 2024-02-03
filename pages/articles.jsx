import CodeBlock from "../components/codeBlock/CodeBlock";
import { useMediumArticles } from "../hooks/useMediumArticles";

const ArticlesPage = () => {
  const { articles } = useMediumArticles();

  const codeSnippet = JSON.stringify({ articles }, null, 2);
  return (
    <>
      <div className="cursor-pointer overflow-y-auto overflow-x-auto">
        <CodeBlock
          numberOfLines={codeSnippet.split("\n").length}
          codeSnippet={codeSnippet}
          type="json"
        />
      </div>
    </>
  );
};

export default ArticlesPage;
