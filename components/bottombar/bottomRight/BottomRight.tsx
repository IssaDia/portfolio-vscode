import BellItem from "./BellItem";
import PrettierItem from "./PrettierItem";

const BottomRight = () => {
  return (
    <div className="flex flex-row w-1/3 items-end h-full justify-end text-white opacity-90 cursor-pointer">
      <div className="flex flex-row space-x-2 items-center">
        <PrettierItem />
      </div>
      <div className="flex flex-row space-x-2  mx-2 mb-1  cursor-pointer">
        <BellItem />
      </div>
    </div>
  );
};

export default BottomRight;
