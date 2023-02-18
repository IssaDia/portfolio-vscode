import styles from './Main.module.css'
import MainMenu from './mainMenu/MainMenu'

const Main = () => {
  return (
    <div className={styles.main}>
      <MainMenu />
      <p>main</p>
    </div>
  )
}

export default Main
