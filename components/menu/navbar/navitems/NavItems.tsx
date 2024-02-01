import { useRouter } from "next/router";
import MenuItemsData from "../../../../lib/data/menuItems";
import SideBarMenuItem from "../../../../widget/SideBarMenuItem";

const NavItems = () => {
  const router = useRouter();
  const navItemsElm = MenuItemsData.map((item, i) => {
    const isActive = router.pathname === item.path;

    return (
      <div
        key={i}
        className={`flex phone:justify-center   landscape:justify-start landscape:pl-8 items-center phone:pb-1 hover:bg-topbar-background hover:bg-opacity-40 ${
          isActive ? "bg-topbar-background" : ""
        }`}
      >
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
