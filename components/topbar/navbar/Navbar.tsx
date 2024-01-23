import { navItems } from "../../../lib/data/navItems";
import Logo from "../logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // const items: JSX.Element[] = navItems.map(
  //   (navItem: string, index: number) => {
  //     return <li key={index}>{navItem}</li>;
  //   }
  // );
  return <div className={styles.container}></div>;
};

export default Navbar;
