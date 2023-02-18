const AboutPage = () => {
  return (
    <>
      <div>About</div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  }
}

export default AboutPage
