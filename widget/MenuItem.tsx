import MenuItemI from '../lib/interfaces/MenuItemI'
import Image from 'next/image'
import styles from './MenuItem.module.css'
import ActiveLink from './activeLink/ActiveLink'

export const MenuItem = ({ image, name, path }: MenuItemI) => {
  return (
    <div className={styles.container}>
      <ActiveLink activeClassName={styles.active} href={path}>
        <Image
          src={`/images/${image}.svg`}
          alt="nav-items-logo"
          width={20}
          height={20}
        />
        <p>{name}</p>
      </ActiveLink>
    </div>
  )
}

export default MenuItem
