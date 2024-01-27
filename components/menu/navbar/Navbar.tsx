import useToggle from "../../../hooks/useToggle";
import ChevronRight from "../../icons/ChevronRight";
import Summary from "./summary/Summary";

const Portfolio = () => {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <div className={`border-b border-menu-secondVariant pb-1`}>
        <div
          onClick={setToggle}
          className="flex flex-row items-center text-menu-firstVariant cursor-pointer"
        >
          <ChevronRight
            className={`transition-transform duration-200  mr-2 ${
              toggle ? "rotate-90" : ""
            }`}
          />
          <p className="uppercase text-sm brightness-150">portfolio</p>
        </div>

        {/* NavItems toggled */}
        {toggle && <Summary />}
      </div>
    </>
  );
};

export default Portfolio;
