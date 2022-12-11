import BellIcon from '../../icons/BellIcon'
import styles from './BellItem.module.css'

const BellItem = () => {
  return (
    <div className={styles.container}>
      <BellIcon className={styles.bellicon} />
    </div>
  )
}

export default BellItem
