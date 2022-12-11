import CheckIcon from '../../icons/CheckIcon'
import styles from './PrettierItem.module.css'

const PrettierItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.checkicon}>
        <CheckIcon />
      </div>
      <p>Prettier</p>
    </div>
  )
}

export default PrettierItem
