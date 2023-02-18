import styles from '../styles/Home.module.css'

export default function HomePage() {
  return <div className={styles.container}></div>
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  }
}
