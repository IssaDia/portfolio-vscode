const ArticlesPage = () => {
  return (
    <>
      <div>
        <div>Recent posts from Medium</div>
      </div>
      <div></div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Articles" },
  };
}

export default ArticlesPage;
