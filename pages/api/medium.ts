import { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";

const mediumFeed = async (req: NextApiRequest, res: NextApiResponse) => {
  const parser = new Parser();
  const feedUrl = `https://medium.com/feed/@issadia`;

  try {
    const feed = await parser.parseURL(feedUrl);
    res.status(200).json(feed.items);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des articles." });
  }
};

export default mediumFeed;
