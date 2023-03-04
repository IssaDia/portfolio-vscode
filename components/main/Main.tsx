import React, { ReactNode } from 'react'

import styles from './Main.module.css'
import MainMenu from './mainMenu/MainMenu'

interface Props {
  children?: ReactNode
}
const Main = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <MainMenu />
      {children}
    </div>
  )
}

export default Main
