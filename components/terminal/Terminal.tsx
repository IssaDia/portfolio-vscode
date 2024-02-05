import React, { useEffect, useRef, useState } from "react";
import interact from "interactjs";
import Contact from "../contact/Contact";

const Terminal = () => {
  const terminalRef = useRef(null);
  const [terminalHeight, setTerminalHeight] = useState(50);

  useEffect(() => {
    if (terminalRef.current) {
      interact(terminalRef.current).resizable({
        edges: { left: true, right: true, bottom: true, top: false },
        listeners: {
          move(event) {
            setTerminalHeight(event.rect.height);
          },
        },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 1000, height: 50 },
            max: { width: 2000, height: 300 },
          }),
        ],
        inertia: true,
      });

      interact(".resize-handle")
        .styleCursor(false)
        .draggable({
          listeners: {
            start(event) {
              event.target.setAttribute("data-start-y", event.clientY);
              event.target.setAttribute("data-start-height", terminalHeight);
            },
            move(event) {
              const startY = parseFloat(
                event.target.getAttribute("data-start-y")
              );
              const startHeight = parseFloat(
                event.target.getAttribute("data-start-height")
              );
              const deltaY = event.clientY - startY;
              const newHeight = Math.max(startHeight - deltaY, 50);
              setTerminalHeight(newHeight);
            },
          },
        });
    }
  }, [terminalHeight]);

  return (
    <>
      <div
        ref={terminalRef}
        className="terminal overflow-hidden bottom-0 w-full"
        style={{ backgroundColor: "#333", height: `${terminalHeight}px` }}
      >
        <div
          className="resize-handle flex flex-row items-center text-menu-firstVariant mb-4 space-x-2 m-2 cursor-ns-resize"
          style={{ cursor: "ns-resize" }}
        >
          <h2 className="text-xs uppercase font-bold text-menu-firstVariant">
            Slide up to contact me
          </h2>
          <span className="text-xl"> 🤷🏽‍♂️</span>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Terminal;
