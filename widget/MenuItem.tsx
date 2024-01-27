// MenuItem.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "./activeLink/ActiveLink";
import MenuItemI from "../lib/interfaces/MenuItemI";

export const MenuItem = ({ image, name, path }: MenuItemI) => {
  return (
    <ActiveLink href={path} activeClassName="active">
      {(isActive: boolean) => (
        <Link href={path} legacyBehavior passHref>
          <a className="block hover:bg-sidebar-background w-full h-full">
            <style jsx>
              {`
                .file:hover {
                  background: #3c3c3c;
                }

                .isActive {
                  background: #3c3c3c;
                }

                .file p {
                  margin-left: 5px;
                }
              `}
            </style>
            <div
              className={`${
                isActive ? "isActive" : ""
              } file flex flex-row items-center pl-7 py-0.7`}
            >
              <Image
                src={`/images/${image}.svg`}
                alt="nav-items-logo"
                width={18}
                height={18}
                className="mr-1.5"
              />
              <p className="text-sm brightness-150 text-menu-firstVariant">
                {name}
              </p>
            </div>
          </a>
        </Link>
      )}
    </ActiveLink>
  );
};

export default MenuItem;
