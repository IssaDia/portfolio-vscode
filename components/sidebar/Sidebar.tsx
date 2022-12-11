import Link from 'next/link'
import {
  sidebarTopItems,
  sidebarBottomItems,
} from '../../lib/data/sidebarItems'
import styles from './Sidebar.module.css'

import { useRouter } from 'next/router'

const Sidebar = () => {
  const router = useRouter()
  const sidebarTopItemsComp = sidebarTopItems.map(({ Icon, path }) => {
    return (
      <Link key={path} href={path}>
        <div
          className={`${styles.item__container} ${
            router.pathname === path && styles.active
          }  `}
        >
          <Icon
            className={styles.icon}
            fill={
              router.pathname === path
                ? 'rgb(225, 228, 232)'
                : 'rgb(106, 115, 125)'
            }
          />
        </div>
      </Link>
    )
  })

  const sidebarBottomItemsComp = sidebarBottomItems.map(
    ({ Icon, path }, index) => {
      return (
        <Link key={index} href={path}>
          <div
            className={`${styles.item__container} ${
              router.pathname === path && styles.active
            }  `}
          >
            <Icon
              className={styles.icon}
              fill={
                router.pathname === path
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
            />
          </div>
        </Link>
      )
    }
  )
  return (
    <div className={styles.container}>
      <div className={styles.top__items}>{sidebarTopItemsComp}</div>
      <div className={styles.bottom__items}>{sidebarBottomItemsComp}</div>
    </div>
  )
}

export default Sidebar
