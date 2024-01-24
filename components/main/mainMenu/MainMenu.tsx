import menuItemsData from "../../../lib/data/menuItems";
import styles from "./MainMenu.module.css";
import MenuItem from "../../../widget/MenuItem";
import { capitalizeFirstLetter } from "../../../utils/helpers/capitalizeFirstLetter";

const MainMenu = () => {
  const menuItems = menuItemsData.map((item, i) => {
    return (
      <div className={styles.container__item} key={i}>
        <MenuItem
          name={capitalizeFirstLetter(item.name)}
          path={item.path}
          image={item.image}
        />
      </div>
    );
  });
  return <div className={styles.container}>{menuItems}</div>;
};

export default MainMenu;
