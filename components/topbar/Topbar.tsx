import Buttons from "./buttons/Buttons";
import SearchBar from "./searchBar/SearchBar";

const Topbar = () => {
  return (
    <div className="h-10 bg-topbar-background flex md:flex-row items-center">
      <div className="w-4/12">
        <Buttons />
      </div>
      <div className="w-8/12 flex flex-row justify-between">
        <SearchBar />
      </div>
    </div>
  );
};

export default Topbar;
