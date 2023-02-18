import useToggle from '../../../hooks/useToggle'
import ChevronRight from '../../icons/ChevronRight'
import styles from './Navbar.module.css'
import NavItems from './navitems/NavItems'

const Portfolio = () => {
  const [toggle, setToggle] = useToggle()

  return (
    <div className={styles.container}>
      <div onClick={setToggle} className={styles.title__container}>
        <ChevronRight
          className={toggle ? styles.chevron__open : styles.chevron__close}
        />
        <p>portfolio</p>
      </div>
      {toggle && <NavItems />}
    </div>
  )
}

export default Portfolio
