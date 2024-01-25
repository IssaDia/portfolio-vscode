import Link from "next/link";
import {
  sidebarTopItems,
  sidebarBottomItems,
} from "../../lib/data/sidebarItems";

import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const sidebarTopItemsComp = sidebarTopItems.map(({ Icon, path }) => {
    return (
      <Link key={path} href={path}>
        <div
        // className={`${styles.item__container} ${
        //   router.pathname === path && styles.active
        // }  `}
        >
          <Icon
            // className={styles.icon}
            fill={
              router.pathname === path
                ? "rgb(225, 228, 232)"
                : "rgb(106, 115, 125)"
            }
          />
        </div>
      </Link>
    );
  });

  const sidebarBottomItemsComp = sidebarBottomItems.map(
    ({ Icon, path }, index) => {
      return (
        <Link key={index} href={path}>
          <div
          // className={`${styles.item__container} ${
          //   router.pathname === path && styles.active
          // }  `}
          >
            <Icon
              className=""
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
    <div className="flex flex-col justify-betwwen py-4 px-4 h-full w-1/10">
      <div className="h-8/10">{sidebarTopItemsComp}</div>
      <div className="h-2/10">{sidebarBottomItemsComp}</div>
    </div>
  );
};

export default Sidebar;
