import Navbar from "./navbar/Navbar";

const Menu = () => {
  return (
    <div className="flex flex-col bg-menu-background w-full h-full">
      <div className="flex flex-row justify-between h-2/12 p-4 text-menu-firstVariant brightness-110 items-center">
        <p className="cursor-pointer uppercase text-sm phone:text-xs ipadLandscape:text-sm">
          Explorer
        </p>
        <span className="cursor-pointer text-sm phone:text-xs ipadLandscape:text-sm">
          ...
        </span>
      </div>
      <>
        <Navbar />
      </>
    </div>
  );
};

export default Menu;
