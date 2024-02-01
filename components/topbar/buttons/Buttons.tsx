import { useState } from "react";

const Buttons = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex justify-evenly items-center cursor-pointer h-full w-full ${
        isHovered ? "hover" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative inline-block bg-topbar-firstButton rounded-full p-1.5 iphonePortrait:text-sm">
        <span
          className={` text-black ${
            isHovered ? "opacity-100" : "opacity-0"
          } hover:opacity-100 hover:font-bold transition-opacity absolute  transform -translate-x-1/2 -translate-y-1/2`}
        >
          <svg
            height="4px"
            viewBox="0 0 512 512"
            width="4px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
          </svg>
        </span>
      </span>

      <span className="relative inline-block bg-topbar-secondButton rounded-full p-1.5">
        <span
          className={` text-black ${
            isHovered ? "opacity-100" : "opacity-0"
          } hover:opacity-100 transition-opacity absolute  transform -translate-x-1/2 -translate-y-1/2`}
        >
          <svg
            height="4px"
            viewBox="0 0 12 12"
            width="4px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="6"
              x2="12"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </span>
      <span className="relative inline-block bg-topbar-thirdButton rounded-full p-1.5">
        <span
          className={` text-black ${
            isHovered ? "opacity-100" : "opacity-0"
          } hover:opacity-100 transition-opacity absolute  transform -translate-x-1/2 -translate-y-1/2`}
        >
          <svg height="4px" viewBox="0 0 16 16" width="4px">
            <path d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"></path>{" "}
          </svg>
        </span>
      </span>
    </div>
  );
};

export default Buttons;
