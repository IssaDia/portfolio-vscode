import menuItemsData from "../../../lib/data/menuItems";
import MenuItem from "../../../widget/SideBarMenuItem";
import { capitalizeFirstLetter } from "../../../utils/helpers/helpers";
import TopMenuItem from "../../../widget/TopMenuItem";

const MainMenu = () => {
  const menuItems = menuItemsData.map((item, i) => {
    return (
      <TopMenuItem
        image={item.image}
        name={capitalizeFirstLetter(item.name)}
        path={item.path}
        key={i}
      />
    );
  });
  return <div className="flex flex-row">{menuItems}</div>;
};

export default MainMenu;
