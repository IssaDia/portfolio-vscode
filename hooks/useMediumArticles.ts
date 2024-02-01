import { useState, useEffect } from "react";
import { fetchMediumArticles } from "../services/mediumService";

export const useMediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      try {
        const fetchedArticles = await fetchMediumArticles();
        const limitedArticles = fetchedArticles.slice(0, 6);
        setArticles(limitedArticles);
      } catch (err: Error | any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getArticles();
  }, []);

  return { articles, isLoading, error };
};
