import React, { ReactNode } from "react";
import Bottombar from "../bottombar/Bottombar";
import Topbar from "../topbar/Topbar";
import Main from "../main/Main";
import Menu from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Topbar />
      <div className="flex flex-row h-screen w-full overflow-x-auto">
        <div className="flex-none w-16 iphonePortrait:hidden">
          <Sidebar />
        </div>
        <div className="flex-none w-2/12 iphonePortrait:w-4/12">
          <Menu />
        </div>
        <div className="grow">
          <Main>{children}</Main>
        </div>
      </div>
      <Bottombar />
    </div>
  );
};

export default Layout;
