const Buttons = () => {
  return (
    <div className="flex justify-evenly w-20 cursor-pointer">
      <div>
        <span className="relative inline-block p-2 bg-topbar-firstButton  rounded-full hover:bg-topbar-firstButton">
          <span className=" text-black opacity-0 hover:opacity-100 transition-opacity absolute  transform -translate-x-1/2 -translate-y-1/2">
            <svg
              height="10px"
              viewBox="0 0 512 512"
              width="12px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          </span>
        </span>
      </div>
      <span className="relative inline-block p-2 bg-topbar-secondButton rounded-full cursor-pointer">
        <span className=" text-black opacity-0 hover:opacity-100 transition-opacity absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            height="10px"
            viewBox="0 0 12 12"
            width="10px"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Straight horizontal line */}
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
      <span className="inline-block p-2 bg-topbar-thirdButton w-2 h-2 rounded-full cursor-pointer"></span>
    </div>
  );
};

export default Buttons;
