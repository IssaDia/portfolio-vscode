export const fetchMediumArticles = async () => {
  const res = await fetch("/api/medium");
  const articles = await res.json();
  return articles;
};
