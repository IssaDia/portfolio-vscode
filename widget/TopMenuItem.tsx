import React from "react";
import MenuItemI from "../lib/interfaces/MenuItemI";
import Link from "next/link";
import ActiveLink from "./activeLink/ActiveLink";
import Image from "next/image";

const TopMenuItem = ({ image, name, path }: MenuItemI) => {
  return (
    <ActiveLink href={path} activeClassName="active">
      {(isActive: boolean) => (
        <div
          className={`flex flex-row justify-start w-full p-2 cursor-pointer border-2 border-opacity-10 border-black  hover:bg-main-background ${
            isActive
              ? "bg-black"
              : " bg-sidebar-background iphonePortrait:hidden"
          } `}
        >
          <Link href={path} legacyBehavior passHref>
            <a className="block  w-full h-full ">
              <div className="flex flex-row iphonePortrait:justify-start">
                <Image
                  src={`/images/${image}.svg`}
                  alt="nav-items-logo"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                <p className="text-sm brightness-150 text-menu-firstVariant">
                  {name}
                </p>
              </div>
            </a>
          </Link>
        </div>
      )}
    </ActiveLink>
  );
};

export default TopMenuItem;
