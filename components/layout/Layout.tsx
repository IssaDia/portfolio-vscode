import Bottombar from '../bottombar/Bottombar'
import Header from '../header/Header'
import styles from './Layout.module.css'
import Sidebar from '../sidebar/Sidebar'
import Menu from '../menu/Menu'
import Main from '../main/Main'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <Menu />
        <Main />
      </div>
      <Bottombar />
    </div>
  )
}

export default Layout
