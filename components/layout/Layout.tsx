import React, { ReactNode, useRef, useState } from "react";
import Bottombar from "../bottombar/Bottombar";
import Topbar from "../topbar/Topbar";
import Main from "../main/Main";
import Menu from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import Contact from "../contact/Contact";
import Terminal from "../terminal/Terminal";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [terminalHeight, setTerminalHeight] = useState(100);
  const [menuWidth, setMenuWidth] = useState(240);
  const terminalRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleTerminalResizeStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const startY = e.clientY;

    // Calculez la distance initiale entre le haut du terminal et la position Y de la souris

    const doResize = (moveEvent: MouseEvent) => {
      if (terminalRef.current) {
        const newHeight = moveEvent.clientY - terminalRef?.current?.offsetTop;

        setTerminalHeight(
          -newHeight + startY + terminalRef?.current?.offsetTop
        );

        console.log(
          -newHeight + startY,
          moveEvent.clientY,
          terminalRef?.current?.offsetTop
        );
      }

      // setTerminalHeight(newHeight);
      // console.log(newHeight, "newHeight");
      // console.log(terminalHeight, "terminalHeight");
      // console.log(startY, "startY");
      // console.log(moveEvent.clientY, "moveEvent.clientY");
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

        <div className="grow flex flex-col" ref={mainRef}>
          <Main>{children}</Main>

          <div className="">
            <Terminal />
          </div>
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Layout;
