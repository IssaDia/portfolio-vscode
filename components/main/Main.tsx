import React, { ReactNode } from "react";
import MainMenu from "./mainMenu/MainMenu";

interface Props {
  children?: ReactNode;
}
const Main = ({ children }: Props) => {
  return (
    <div className="bg-main-background h-full text-white overflow-x-auto">
      <MainMenu />
      {children}
    </div>
  );
};

export default Main;
