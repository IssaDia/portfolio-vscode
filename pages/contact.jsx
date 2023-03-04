const ContactPage = () => {
  return (
    <>
      <div>Contact</div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  }
}

export default ContactPage
