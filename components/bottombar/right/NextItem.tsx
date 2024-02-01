import NextjsIcon from '../../icons/NextjsIcon'
import styles from './NextItem.module.css'

const NextItem = () => {
  return (
    <div className={styles.container}>
      <NextjsIcon />
      <p>Powered by Next.js</p>
    </div>
  )
}

export default NextItem
