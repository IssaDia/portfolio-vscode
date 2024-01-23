import Buttons from "./buttons/Buttons";
import styles from "./Topbar.module.css";
import Navbar from "./navbar/Navbar";
import Presentation from "./presentation/Presentation";
import SearchBar from "./searchBar/SearchBar";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <Buttons />
      <SearchBar />
    </div>
  );
};

export default Topbar;
