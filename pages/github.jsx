import CodeBlock from "../components/codeBlock/CodeBlock";

const codeSnippet = `<template>
  <div class = "github" >
    <h1>My Github Projects</h1>
    <ul>
      <li v-for= "project in projects" :key = "project.id" >
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup >
import { ref , onMounted } from "vue" ;

const projects = ref([]);

onMounted ( async ( ) => {
  const response = await fetch('https://github.com/IssaDia');
  const data = await response.json();
  projects.value = data;
} ) ;
</script>

<style scoped >
.github {
  username: githubUsername ;
  repos : nbRepos ;
  followers : nbFollowers ;
}
</style>
`;

const Github = ({ user }) => {
  return (
    <>
      <div className="cursor-pointer overflow-y-auto overflow-x-auto">
        <CodeBlock
          numberOfLines={codeSnippet.split("\n").length}
          codeSnippet={codeSnippet}
          type="vue"
          user={user}
        />
      </div>
    </>
  );
};

export default Github;

export async function getStaticProps() {
  try {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    const token = process.env.NEXT_GITHUB_API_KEY;

    if (!token) {
      throw new Error(
        "GitHub API key is not defined in the environment variables."
      );
    }

    const headers = {
      Authorization: `token ${token}`,
    };

    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
    });
    if (!userRes.ok) {
      throw new Error(`Failed to fetch user. Status: ${userRes.status}`);
    }
    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=30`,
      { headers }
    );
    if (!repoRes.ok) {
      throw new Error(
        `Failed to fetch repositories. Status: ${repoRes.status}`
      );
    }
    let repos = await repoRes.json();

    const allowedTopics = ["javascript"];
    repos = repos.filter(
      (repo) =>
        repo.topics &&
        repo.topics.some((topic) => allowedTopics.includes(topic))
    );

    return {
      props: { title: "GitHub", repos, user },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        error: error.message || "An error occurred while fetching data.",
      },
      revalidate: 3600,
    };
  }
}
