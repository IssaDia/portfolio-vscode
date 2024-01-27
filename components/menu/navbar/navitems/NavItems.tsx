import MenuItemsData from "../../../../lib/data/menuItems";
import MenuItem from "../../../../widget/MenuItem";

const NavItems = () => {
  const navItemsElm = MenuItemsData.map((item, i) => {
    return (
      <MenuItem key={i} name={item.name} path={item.path} image={item.image} />
    );
  });
  return <>{navItemsElm}</>;
};

export default NavItems;
