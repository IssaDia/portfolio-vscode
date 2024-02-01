import React from "react";

type TextProps = {
  text: string;
};

const Text = ({ text }: TextProps) => {
  return (
    <div className="">
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
