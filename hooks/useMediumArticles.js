import { useState, useEffect } from "react";
import RSSParser from "rss-parser"; // Ensure you have 'rss-parser' installed

export const useMediumArticles = () => {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    const parser = new RSSParser();
    const mediumURL = "https://medium.com/feed/@issadia";

    const fetchData = async () => {
      try {
        const feed = await parser.parseURL(mediumURL);

        const mediumArticles = feed.items.map((item) => ({
          title: item.title,
          link: item.guid,
        }));
        setArticles(mediumArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return articles;
};
