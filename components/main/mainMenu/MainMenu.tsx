import menuItemsData from "../../../lib/data/menuItems";
import MenuItem from "../../../widget/MenuItem";
import { capitalizeFirstLetter } from "../../../utils/helpers/helpers";

const MainMenu = () => {
  const menuItems = menuItemsData.map((item, i) => {
    return (
      <div key={i}>
        <MenuItem
          name={capitalizeFirstLetter(item.name)}
          path={item.path}
          image={item.image}
        />
      </div>
    );
  });
  return <div className="flex flex-row">{menuItems}</div>;
};

export default MainMenu;
