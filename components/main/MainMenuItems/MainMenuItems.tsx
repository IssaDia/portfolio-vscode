import sidebarNavItems from '../../../lib/data/menuItems'
import styles from './MainMenuItems.module.css'

const MainMenuItems = () => {
  const mainMenuItems = sidebarNavItems.map((item, i) => {
    return (
      <>
        <div>{item}</div>
      </>
    )
  })
  return <div className={styles.container}>{mainMenuItems}</div>
}

export default MainMenuItems
