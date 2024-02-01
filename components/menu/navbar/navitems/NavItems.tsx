import MenuItemsData from "../../../../lib/data/menuItems";
import SideBarMenuItem from "../../../../widget/SideBarMenuItem";
import MenuItem from "../../../../widget/SideBarMenuItem";

const NavItems = () => {
  const navItemsElm = MenuItemsData.map((item, i) => {
    return (
      <div className="iphonePortrait:ml-7 iphonePortrait:mb-1">
        <SideBarMenuItem
          key={i}
          name={item.name}
          path={item.path}
          image={item.image}
        />
      </div>
    );
  });
  return <>{navItemsElm}</>;
};

export default NavItems;
