import React from "react";

type TitleProps = {
  surname: string;
  lastname: string;
};

const Title = ({ surname, lastname }: TitleProps) => {
  return (
    <div className="">
      <span>{surname}</span>
      <span>{lastname}</span>
    </div>
  );
};

export default Title;
