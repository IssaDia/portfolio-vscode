// MenuItem.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "./activeLink/ActiveLink";
import MenuItemI from "../lib/interfaces/MenuItemI";

export const MenuItem = ({ image, name, path }: MenuItemI) => {
  return (
    <div className=" hover:bg-topbar-background ip">
      <ActiveLink href={path} activeClassName="active">
        {(isActive: boolean) => (
          <Link href={path} legacyBehavior passHref>
            <a>
              <div
                className={`${
                  isActive ? "isActive bg-topbar-background" : ""
                } items-center justify-center flex flex-row`}
              >
                <Image
                  src={`/images/${image}.svg`}
                  alt="nav-items-logo"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                <p className="text-sm brightness-150 text-menu-firstVariant portrait:text-xs">
                  {name}
                </p>
              </div>
            </a>
          </Link>
        )}
      </ActiveLink>
    </div>
  );
};

export default MenuItem;
