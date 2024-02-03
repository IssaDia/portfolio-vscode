import CodeBlock from "../components/codeBlock/CodeBlock";

const codeSnippet = `<template>
  <div class = "github-projects" >
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
.github-projects {
  username: IssaDia;
  nbRepos : 30;
  followers : 0;
}
</style>
`;

const GithubPage = ({ repos, user, error }) => {
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <div className="cursor-pointer overflow-y-auto overflow-x-auto">
        <CodeBlock
          numberOfLines={codeSnippet.split("\n").length}
          codeSnippet={codeSnippet}
          type="vue"
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_GITHUB_API_KEY}`,
        },
      }
    );
    if (!userRes.ok) {
      throw new Error("Failed to fetch user.");
    }
    const user = await userRes.json();

    const nb_repos = 30;
    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=${nb_repos}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_GITHUB_API_KEY}`,
        },
      }
    );
    if (!repoRes.ok) {
      throw new Error("Failed to fetch repositories.");
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

export default GithubPage;
