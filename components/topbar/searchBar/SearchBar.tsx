import React from "react";
import ArrowNavigator from "./arrowNavigator/ArrowNavigator";
import SearchInput from "./searchInput/SearchInput";

const SearchBar = () => {
  return (
    <div className="flex flex-row w-full justify-center">
      <ArrowNavigator />
      <SearchInput />
    </div>
  );
};

export default SearchBar;
