// MenuItem.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "./activeLink/ActiveLink";
import MenuItemI from "../lib/interfaces/MenuItemI";

export const MenuItem = ({ image, name, path }: MenuItemI) => {
  return (
    <div className="iphonePortrait:mb-4">
      <ActiveLink href={path} activeClassName="active">
        {(isActive: boolean) => (
          <Link href={path} legacyBehavior passHref>
            <a className="mb-2">
              {/* <style jsx>
                {`
                  .file {
                    display: flex;
                    flex-direction: row;
                    padding: 10px 10px 10px 40px;
                    marging-top: 5px;
                  }
                  .file:hover {
                    background: #3c3c3c;
                    opacity: 0.9;
                  }

                  .isActive {
                    background: #3c3c3c;
                  }

                  .file p {
                    margin-left: 5px;
                  }
                `}
              </style> */}
              <div
                className={`${
                  isActive ? "isActive " : ""
                } file items-center flex flex-row`}
              >
                <Image
                  src={`/images/${image}.svg`}
                  alt="nav-items-logo"
                  width={18}
                  height={18}
                  className=""
                />
                <p className="text-sm brightness-150 text-menu-firstVariant iphonePortrait:text-xs">
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
