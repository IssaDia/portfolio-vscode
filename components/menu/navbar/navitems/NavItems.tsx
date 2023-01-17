import sidebarNavItems from '../../../../lib/data/sidebarNavItems'
import styles from './NavItems.module.css'

const NavItems = () => {
  const navItemsElm = sidebarNavItems.map((item, i) => {
    return <div></div>
  })
  return <div className={styles.container}>NavItems</div>
}

export default NavItems
