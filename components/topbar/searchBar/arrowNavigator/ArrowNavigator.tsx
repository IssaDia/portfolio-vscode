import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ArrowNavigator: React.FC = () => {
  return (
    <div className="flex flex-row space-x-2 items-center portrait:hidden landscape:hidden">
      <div className="h-6 w-6 hover:border hover:border-topbar-secondVariant hover:bg-opacity-20 rounded-md hover:brightness-125 cursor-pointer">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="arrow left text-xl text-topbar-firstVariant brightness-125 transform scale-x-75"
        />
      </div>
      <div className="h-6 w-6 cursor-pointer">
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="arrow right text-xl text-topbar-secondVariant transform scale-x-75"
        />
      </div>
    </div>
  );
};

export default ArrowNavigator;
