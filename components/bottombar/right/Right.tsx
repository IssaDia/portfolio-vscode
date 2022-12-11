import styles from './Right.module.css'
import BellItem from './BellItem'
import NextItem from './NextItem'
import PrettierItem from './PrettierItem'

const Right = () => {
  return (
    <div className={styles.container}>
      <NextItem />
      <PrettierItem />
      <BellItem />
    </div>
  )
}

export default Right
