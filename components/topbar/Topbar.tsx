import Buttons from "./buttons/Buttons";
import SearchBar from "./searchBar/SearchBar";

const Topbar = () => {
  return (
    <div className=" bg-topbar-background flex md:flex-row w-full">
      <div className="w-4/12 portrait:w-2/12 landscape:w-1/12 ipadPortrait:w-7/12">
        <Buttons />
      </div>
      <div className="w-8/12 flex flex-row justify-between portrait:w-10/12 landscape:w-11/12">
        <SearchBar />
      </div>
    </div>
  );
};

export default Topbar;
