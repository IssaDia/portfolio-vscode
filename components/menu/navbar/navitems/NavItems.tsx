import MenuItemsData from '../../../../lib/data/menuItems'
import styles from './NavItems.module.css'
import MenuItem from '../../../../widget/MenuItem'

const NavItems = () => {
  const navItemsElm = MenuItemsData.map((item, i) => {
    return (
      <div key={i} className={styles.navItems__container}>
        <MenuItem name={item.name} path={item.path} image={item.image} />
      </div>
    )
  })
  return <div className={styles.container}>{navItemsElm}</div>
}

export default NavItems
