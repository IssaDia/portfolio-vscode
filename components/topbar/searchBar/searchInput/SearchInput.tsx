import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center  phone:w-full phone:mx-6 landscape:mx-6 phone:my-2 landscape:my-2 phone:text-center">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-topbar-firstVariant rotate-90 brightness-110 px-32 phone:hidden landscape:block ipadPortrait:mr-48 landscape:mr-52 ipadPortrait:block"
      />
      <style></style>
      <input
        type="text"
        placeholder="Issa Dia (Frontend Developer)"
        className="relative text-center search-input rounded-md w-full border bg-topbar-background bg-opacity-5 border-topbar-secondVariant cursor-pointer outline-none brightness-150 caret-transparent phone:placeholder:text-xs placeholder:text-sm  landscape:border-mx-4 phone:px-4"
      />
    </div>
  );
};

export default SearchInput;
