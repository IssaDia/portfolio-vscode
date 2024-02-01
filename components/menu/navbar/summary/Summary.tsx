import React from "react";

import useToggle from "../../../../hooks/useToggle";
import ChevronRight from "../../../icons/ChevronRight";
import NavItems from "../navitems/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <div
        onClick={setToggle}
        className="flex flex-row items-center text-menu-firstVariant cursor-pointer pl-2 iphonePortrait:pl-1 "
      >
        <ChevronRight
          className={`transition-transform duration-200 cursor-pointer mr-2 ${
            toggle ? "rotate-90" : ""
          }`}
        />

        {toggle ? (
          <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
        ) : (
          <FontAwesomeIcon icon={faFolder} className="mr-2" />
        )}

        <p className="text-sm brightness-150 py-1  iphonePortrait:text-xs">
          summary
        </p>
      </div>

      {toggle && <NavItems />}
    </>
  );
};

export default Summary;
