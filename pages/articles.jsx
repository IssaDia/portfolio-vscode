import Image from "next/image";
import Link from "next/link";
import Parser from "rss-parser";

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

const ArticlesPage = () => {
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

export default ArticlesPage;
