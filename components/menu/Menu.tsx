import { useEffect, useRef, useState } from "react";
import Navbar from "./navbar/Navbar";
import interact from "interactjs";

const Menu = () => {
  const menuRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState(200);

  useEffect(() => {
    if (menuRef.current) {
      interact(menuRef.current).resizable({
        edges: { right: true, left: false, top: false, bottom: false },
        listeners: {
          move(event) {
            setMenuWidth(event.rect.width);
          },
        },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 200, height: 180 },
            max: { width: 1500, height: Infinity },
          }),
        ],
        inertia: true,
      });
    }
  }, []);

  return (
    <div
      className="menu flex flex-col bg-menu-background left-0 h-full"
      ref={menuRef}
      style={{
        width: `${menuWidth}px`,
        minWidth: `200px`,
      }}
    >
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
