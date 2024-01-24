import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const ArrowNavigator: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row  items-center">
        <div className="h-6 w-6 hover:brightness-125 cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="arrow left text-xl text-topbar-firstVariant"
          />
        </div>
      </div>
      <div>
        <div className="h-6 w-6 cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="arrow right text-xl text-topbar-secondVariant"
          />
        </div>
      </div>
    </div>
  );
};

export default ArrowNavigator;
