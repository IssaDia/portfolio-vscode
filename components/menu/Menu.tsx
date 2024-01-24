import styles from "./Menu.module.css";
import Navbar from "./navbar/Navbar";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.explorer}>
        <p>Explorer</p>
        <span>...</span>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Menu;
