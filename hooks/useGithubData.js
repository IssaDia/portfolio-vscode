// hooks/useGithubData.js
import { useState, useEffect } from "react";

const useGithubData = () => {
  const [userData, setUserData] = useState({
    user: null,
    repos: [],
    error: null,
  });

  useEffect(() => {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    const token = process.env.NEXT_GITHUB_API_KEY;
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `token ${token}`,
        };

        // Fetch user data
        const userRes = await fetch(
          `https://api.github.com/users/${username}`,
          { headers }
        );

        if (!userRes.ok) throw new Error("Failed to fetch user.");
        const user = await userRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=30`,
          { headers }
        );
        if (!repoRes.ok) throw new Error("Failed to fetch repositories.");
        let repos = await repoRes.json();

        const allowedTopics = ["javascript"];
        repos = repos.filter(
          (repo) =>
            repo.topics &&
            repo.topics.some((topic) => allowedTopics.includes(topic))
        );

        setUserData({ user, repos, error: null });
      } catch (error) {
        console.error(error);
        setUserData({
          user: null,
          repos: [],
          error: error.message || "An error occurred while fetching data.",
        });
      }
    };

    fetchData();
  }, []);

  return userData;
};

export default useGithubData;
