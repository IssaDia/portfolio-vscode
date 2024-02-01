import Image from "next/image";
import Link from "next/link";
import Parser from "rss-parser";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <div className="p-4">
        <h1 className="uppercase text-sm brightness-150 my-4 text-center cursor-pointer">
          Recent Posts from Medium
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg border-none"
          >
            <Image
              src="/images/medium.jpeg"
              alt="medium logo"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-4  h-24 mb-1">
              <Link href={article.link}>
                <h2 className="brightness-150 font-bold text-l mb-2 h-12 phone:text-xs landscape:text-sm">
                  {article.title}
                </h2>
                <p className="brightness-150 text-sm h4">{article.creator}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const parser = new Parser();
  const feedUrl = `https://medium.com/feed/@issadia`;

  try {
    const feed = await parser.parseURL(feedUrl);
    const articles = feed.items.slice(0, 6);
    return {
      props: {
        articles: articles,
        title: "Articles",
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        articles: [],
        error: "Failed to fetch articles.",
        title: "Articles",
      },
    };
  }
}

export default ArticlesPage;
