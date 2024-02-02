import React, { ReactNode, useState } from "react";
import Bottombar from "../bottombar/Bottombar";
import Topbar from "../topbar/Topbar";
import Main from "../main/Main";
import Menu from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import Contact from "../contact/Contact";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [terminalHeight, setTerminalHeight] = useState(100);

  const handleResizeStart = (e: any) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = terminalHeight;

    const doResize = (moveEvent: any) => {
      const newHeight = startHeight + (startY - moveEvent.clientY);
      setTerminalHeight(Math.max(newHeight, 30));
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", doResize);
      window.removeEventListener("mouseup", stopResize);
    };

    window.addEventListener("mousemove", doResize);
    window.addEventListener("mouseup", stopResize);
  };
  return (
    <div className="flex flex-col h-screen w-full">
      <Topbar />
      <div className="flex flex-row h-screen w-full overflow-x-auto">
        <div className="flex-none w-16 phone:hidden landscape:block resize-none hover:resize">
          <Sidebar />
        </div>
        <div className="flex-none w-2/12 phone:w-4/12 landscape:w-3/12 ipadLandscape:w-2/12 resize-none hover:resize">
          <Menu />
        </div>
        <div className="grow flex flex-col">
          <Main>{children}</Main>
          <div
            className="w-full cursor-ns-resize bg-topbar-secondVariant hidden ipadLandscape:block"
            onMouseDown={handleResizeStart} // Set the mousedown event handler
            style={{ height: "2px" }} // The height of the draggable area
          />
          {/* Terminal area */}

          <div
            className="terminal bg-main-background text-white hidden ipadLandscape:block"
            style={{ height: `${terminalHeight}px` }}
          >
            <div className="z-10">
              <Contact />
            </div>
          </div>
          <div />
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Layout;
