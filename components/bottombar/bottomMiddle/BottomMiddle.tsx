import Link from "next/link";
import React from "react";

const BottomMiddle = () => {
  return (
    <div className="flex flex-row h-full w-1/3 text-white opacity-90 items-center justify-center">
      <Link href="https://www.linkedin.com/in/nitinranganath/">
        <p className="underline uppercase ipadLandscape:text-xs phone:text-xxs text-white w-full  my-auto cursor-pointer phone:lowercase text-center">
          inspired by N.Ranganath
        </p>
      </Link>
    </div>
  );
};

export default BottomMiddle;
