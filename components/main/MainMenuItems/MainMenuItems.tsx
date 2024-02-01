import sidebarNavItems from "../../../lib/data/menuItems";

const MainMenuItems = () => {
  const mainMenuItems = sidebarNavItems.map((item, i) => {
    return (
      <>
        <div>{item}</div>
      </>
    );
  });
  return <div className="">{mainMenuItems}</div>;
};

export default MainMenuItems;
