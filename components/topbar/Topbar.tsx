import Buttons from "./buttons/Buttons";
import SearchBar from "./searchBar/SearchBar";

const Topbar = () => {
  return (
    <div className=" bg-topbar-background flex md:flex-row w-full">
      <div className="w-4/12 iphonePortrait:w-2/12">
        <Buttons />
      </div>
      <div className="w-8/12 flex flex-row justify-between iphonePortrait:w-10/12">
        <SearchBar />
      </div>
    </div>
  );
};

export default Topbar;
