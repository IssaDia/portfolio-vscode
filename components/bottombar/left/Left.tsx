import styles from './Left.module.css'
import SourceControlIcon from '../../icons/SourceControlIcon'
import ErrorIcon from '../../icons/ErrorIcon'
import WarningIcon from '../../icons/WarningIcon'

const Left = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sourcecontrol}>
        <SourceControlIcon />
        <p>main</p>
      </div>
      <div className={styles.warnings}>
        <div className={styles.error}>
          <ErrorIcon />
          <p>0</p>
        </div>
        <div className={styles.warning}>
          <WarningIcon />
          <p>0</p>
        </div>
      </div>
    </div>
  )
}

export default Left
