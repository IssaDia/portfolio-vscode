import Buttons from './buttons/Buttons'
import styles from './Header.module.css'
import Navbar from './navbar/Navbar'
import Presentation from './presentation/Presentation'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <Presentation />
      <Buttons />
    </div>
  )
}

export default Header
