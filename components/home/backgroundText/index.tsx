import React from "react";

type BackgroundTextProps = {
  text: string;
};
const BackgroundText = ({ text }: BackgroundTextProps) => {
  return (
    <div>
      <p className="">{text}</p>
    </div>
  );
};

export default BackgroundText;
