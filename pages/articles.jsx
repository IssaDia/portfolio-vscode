const ArticlesPage = () => {
  return (
    <>
      <div>Articles</div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Articles' },
  }
}

export default ArticlesPage
