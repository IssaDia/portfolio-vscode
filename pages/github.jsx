const GithubPage = () => {
  return (
    <>
      <div>Github</div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Github' },
  }
}

export default GithubPage
