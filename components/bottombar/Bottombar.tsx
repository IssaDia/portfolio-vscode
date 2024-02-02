import BottomLeft from "./bottomLeft/BottomLeft";
import BottomMiddle from "./bottomMiddle/BottomMiddle";
import BottomRight from "./bottomRight/BottomRight";

const Bottombar = () => {
  return (
    <div className="bg-bottombar-background h-6 flex w-full flex-row">
      <BottomLeft />
      <BottomMiddle />
      <BottomRight />
    </div>
  );
};

export default Bottombar;
