import React, { ReactNode } from "react";
import Bottombar from "../bottombar/Bottombar";
import Topbar from "../topbar/Topbar";
import Main from "../main/Main";
import Menu from "../menu/Menu";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.css";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <div className="">
        <Topbar />
      </div>
      {/* <div className="">
        <Main children="" />
        <Menu />
        <Sidebar />
      </div>
      <Bottombar /> */}
    </div>
  );
};

export default Layout;
