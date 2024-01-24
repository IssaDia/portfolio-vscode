import Buttons from "./buttons/Buttons";
import styles from "./Topbar.module.css";
import Navbar from "./navbar/Navbar";
import Presentation from "./presentation/Presentation";
import SearchBar from "./searchBar/SearchBar";

const Topbar = () => {
  return (
    <div className="h-12 bg-topbar-background flex items-center">
      <div className="w-3/12">
        <Buttons />
      </div>
      <div className="w-9/12 flex justify-around">
        <SearchBar />
      </div>
    </div>
  );
};

export default Topbar;
