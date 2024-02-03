import CodeBlock from "../components/codeBlock/CodeBlock";

import RSSParser from "rss-parser";

const mediumURL = "https://medium.com/feed/@issadia";

const Articles = ({ articles, notFound }) => {
  if (notFound) {
    return <p>An error occurred while fetching data.</p>;
  }
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

export default Articles;

export async function getStaticProps() {
  const parser = new RSSParser();

  try {
    const feed = await parser.parseURL(mediumURL);
    const articles = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
    }));

    return {
      props: {
        articles: articles,
        title: "Articles",
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        articles: [],
        notFound: true,
        title: "Articles",
      },
    };
  }
}
