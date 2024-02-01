import Image from "next/image";
import { useMediumArticles } from "../hooks/useMediumArticles";
import Link from "next/link";

const ArticlesPage = () => {
  const { articles, isLoading, error } = useMediumArticles();

  console.log(articles);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>
        <h1 className="uppercase text-sm brightness-150 my-4 text-center cursor-pointer">
          Recent Posts from Medium
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article: Article, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/medium.jpeg"
              alt="medium logo"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-4 bg-sidebar-background h-24 mb-1 border-none">
              <Link href={article.link}>
                <h2 className="brightness-150 font-bold text-l mb-2 h-12">
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
  return {
    props: { title: "Articles" },
  };
}

export default ArticlesPage;
