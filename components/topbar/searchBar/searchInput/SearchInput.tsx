import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center w-full portrait:w-full portrait:mx-6 landscape:mx-6 portrait:my-2 landscape:my-2 portrait:text-center">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-topbar-firstVariant rotate-90 brightness-110 px-32 portrait:hidden landscape:block landscape:mr-60 "
      />
      <style></style>
      <input
        type="text"
        placeholder="Issa Dia (Développeur Frontend)"
        className="relative text-center search-input rounded-md w-full border bg-topbar-background bg-opacity-5 border-topbar-secondVariant cursor-pointer outline-none brightness-150 caret-transparent portrait:placeholder:text-sm placeholder:text-sm portrait:border-mx-16 landscape:border-mx-2 "
      />
    </div>
  );
};

export default SearchInput;
