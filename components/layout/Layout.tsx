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
  const [menuWidth, setMenuWidth] = useState(240);

  const handleTerminalResizeStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = terminalHeight;

    const doResize = (moveEvent: MouseEvent) => {
      const newHeight = startHeight - (moveEvent.clientY - startY);
      setTerminalHeight(Math.max(newHeight, 30)); // Set minimum height for the terminal
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", doResize);
      window.removeEventListener("mouseup", stopResize);
    };

    window.addEventListener("mousemove", doResize);
    window.addEventListener("mouseup", stopResize);
  };

  const handleMenuResizeStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = menuWidth;

    const doResize = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      setMenuWidth(Math.max(newWidth, 180));
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

        <div className="relative" style={{ width: `${menuWidth}px` }}>
          <Menu />
          <div
            className="cursor-ew-resize bg-topbar-secondVariant hidden ipadLandscape:block"
            onMouseDown={handleMenuResizeStart}
            style={{
              width: "2px",
              height: "100%",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          />
        </div>

        <div className="grow flex flex-col">
          <Main>{children}</Main>
          <div
            className="w-full cursor-ns-resize bg-topbar-secondVariant hidden ipadLandscape:block"
            onMouseDown={handleTerminalResizeStart} // Set the mousedown event handler
            style={{ height: "2px" }} // The height of the draggable area
          />

          <div
            className="terminal bg-main-background text-white hidden ipadLandscape:block overflow-hidden"
            style={{ height: `${terminalHeight}px` }}
          >
            <div className="z-10">
              <div className="flex flex-row items-center text-menu-firstVariant mb-4 space-x-2 m-2">
                <h2 className="text-xs uppercase font-bold text-menu-firstVariant">
                  Slide up to contact me
                </h2>

                <span className="text-xl"> 🤷🏽‍♂️</span>
              </div>
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
