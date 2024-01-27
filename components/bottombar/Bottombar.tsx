import Left from "./left/Left";
import Right from "./right/Right";

const Bottombar = () => {
  return (
    <div className="bg-bottombar-background h-6 flex flex-row">
      <Left />
      <Right />
    </div>
  );
};

export default Bottombar;
