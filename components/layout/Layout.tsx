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
    <React.Fragment>
      <Topbar />
      <Sidebar />

      {/* <Main children="" />
        <Menu /> */}

      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default Layout;
