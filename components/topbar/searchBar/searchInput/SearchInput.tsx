import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center w-full iphonePortrait:w-full iphonePortrait:mx-6 iphonePortrait:my-2 iphonePortrait:text-center">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-topbar-firstVariant rotate-90 brightness-110 px-32 iphonePortrait:hidden"
      />
      <style></style>
      <input
        type="text"
        placeholder="Issa Dia (Développeur Frontend)"
        className="relative text-center search-input rounded-md w-full border bg-topbar-background bg-opacity-5 border-topbar-secondVariant cursor-pointer outline-none brightness-150 caret-transparent iphonePortrait:placeholder:text-sm placeholder:text-sm iphonePortrait:border-mx-16 "
      />
    </div>
  );
};

export default SearchInput;
