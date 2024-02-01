import Link from "next/link";
import {
  sidebarTopItems,
  sidebarBottomItems,
} from "../../lib/data/sidebarItems";

import { useRouter } from "next/router";

type SidebarItem = {
  Icon: React.ComponentType<{ width: string; height: string; fill: string }>;
  path: string;
};

const Sidebar = () => {
  const router = useRouter();

  const renderIconWithLine = (
    Icon: React.ComponentType<{ width: string; height: string; fill: string }>,
    path: string
  ) => {
    const isActive = router.pathname === path;
    const lineColor = isActive ? "bg-sidebar-secondVariant" : "bg-transparent"; // Active color or transparent

    return (
      <div className="relative flex items-center">
        <div
          className={`w-1 h-16 ${lineColor} absolute brightness-200 right-11`}
        ></div>

        <div className="brightness-110 sm:w-15 sm:h-15">
          <Icon
            width="30"
            height="30"
            fill={
              router.pathname === path
                ? "rgb(225, 228, 232)"
                : "rgb(106, 115, 125)"
            }
          />
        </div>
      </div>
    );
  };

  const sidebarTopItemsComp = sidebarTopItems.map(
    ({ Icon, path }: SidebarItem) => {
      return (
        <Link key={path} href={path}>
          {renderIconWithLine(Icon, path)}
        </Link>
      );
    }
  );

  const sidebarBottomItemsComp = sidebarBottomItems.map(
    ({ Icon, path }, index) => {
      return (
        <Link key={index} href={path}>
          <div>
            <Icon
              width="30"
              height="30"
              fill={
                router.pathname === path
                  ? "rgb(225, 228, 232)"
                  : "rgb(106, 115, 125)"
              }
            />
          </div>
        </Link>
      );
    }
  );
  return (
    <div className="flex flex-col justify-between h-full w-full bg-sidebar-background p-4 relative">
      <div className="grid grid-flow-row justify-around h-96">
        {sidebarTopItemsComp}
      </div>
      <div className="grid grid-flow-row justify-around h-48">
        {sidebarBottomItemsComp}
      </div>
    </div>
  );
};

export default Sidebar;
