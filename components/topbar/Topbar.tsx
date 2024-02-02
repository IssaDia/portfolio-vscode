import Buttons from "./buttons/Buttons";
import SearchBar from "./searchBar/SearchBar";

const Topbar = () => {
  return (
    <div className=" bg-topbar-background flex md:flex-row w-full border-b-0.5 border-opacity-80 border-main-background">
      <div className="phone:w-2/12 ipadPortrait:w-1/12">
        <Buttons />
      </div>
      <div className="w-8/12 flex flex-row justify-between phone:w-10/12">
        <SearchBar />
      </div>
    </div>
  );
};

export default Topbar;
