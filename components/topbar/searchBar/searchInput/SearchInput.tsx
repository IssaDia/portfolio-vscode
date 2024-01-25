import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = () => {
  return (
    <div className=" flex items-center w-1/2">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-topbar-firstVariant rotate-90 brightness-110 px-32 xl:block hidden"
      />
      <style>
        {`
          .search-input::placeholder {
            font-size: 0.75rem;  
          }
        `}
      </style>
      <input
        type="text"
        placeholder="Issa Dia (Développeur Frontend)"
        className="relative text-center search-input rounded-md w-full border bg-topbar-background bg-opacity-5 border-topbar-secondVariant cursor-pointer outline-none brightness-150 caret-transparent"
      />
    </div>
  );
};

export default SearchInput;
