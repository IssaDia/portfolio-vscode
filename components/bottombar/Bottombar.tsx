import styles from './Bottombar.module.css'
import Left from './left/Left'
import Right from './right/Right'

const Bottombar = () => {
  return (
    <div className={styles.container}>
      <Left />
      <Right />
    </div>
  )
}

export default Bottombar
