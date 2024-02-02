import React from "react";
import MenuItemI from "../lib/interfaces/MenuItemI";
import Link from "next/link";
import ActiveLink from "./activeLink/ActiveLink";
import Image from "next/image";
import { faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopMenuItem = ({ image, name, path }: MenuItemI) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <ActiveLink href={path} activeClassName="active">
      {(isActive: boolean) => (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex flex-row justify-between w-full p-2 cursor-pointer  hover:bg-main-background  ${
            isActive
              ? "bg-black"
              : "bg-sidebar-background phone:hidden ipadLandscape:block"
          } `}
        >
          <div>
            <Link href={path} legacyBehavior passHref>
              <a className="block  w-full h-full ">
                <div className="flex flex-row phone:justify-start">
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
                  {/* {isHovered && (
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-sidebar-background  cursor-pointer hidden ipadLandscape:block mr-12"
                    />
                  )} */}
                </div>
              </a>
            </Link>
          </div>
        </div>
      )}
    </ActiveLink>
  );
};

export default TopMenuItem;
