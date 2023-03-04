import React, { ReactNode } from "react";
import styles from "./HomeWrapper.module.css";

type ChildrenProps = {
  children: ReactNode[];
};

const HomeWrapper = ({ children }: ChildrenProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default HomeWrapper;
