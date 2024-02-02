import SourceControlIcon from "../../icons/SourceControlIcon";
import ErrorIcon from "../../icons/ErrorIcon";
import WarningIcon from "../../icons/WarningIcon";

const BottomLeft = () => {
  return (
    <div className="flex flex-row h-full w-1/3 text-white opacity-90">
      <div className="flex flex-row mr-4 cursor-pointer bg-bottombar-background hover:bg-opacity-90 over z-40">
        <SourceControlIcon />
        <p>main</p>
      </div>
      <div className="flex flex-row h-full w-24 space-x-2 cursor-pointer bg-bottombar-background hover:bg-opacity-90">
        <div className="flex flex-row items-center space-x-1">
          <ErrorIcon />
          <p>0</p>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <WarningIcon />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default BottomLeft;
