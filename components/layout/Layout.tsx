import React, { ReactNode } from "react";
import Bottombar from "../bottombar/Bottombar";
import Topbar from "../topbar/Topbar";
import Main from "../main/Main";
import Menu from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import Terminal from "../terminal/Terminal";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Topbar />
      <div className="flex flex-row h-screen w-full overflow-x-auto">
        <div className="flex-none w-16 phone:hidden landscape:block resize-none hover:resize">
          <Sidebar />
        </div>

        <div>
          <Menu />
        </div>

        <div className="grow flex flex-col">
          <Main>{children}</Main>

          <div className="ipadLandscape:block hidden">
            <Terminal />
          </div>
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Layout;
