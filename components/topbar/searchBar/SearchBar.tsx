import React from "react";
import ArrowNavigator from "./arrowNavigator/ArrowNavigator";
import SearchInput from "./searchInput/SearchInput";

const SearchBar = () => {
  return (
    <div className="flex flex-row">
      <ArrowNavigator />
      <SearchInput />
    </div>
  );
};

export default SearchBar;
