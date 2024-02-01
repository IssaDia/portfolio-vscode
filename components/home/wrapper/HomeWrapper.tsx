import React, { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode[];
};

const HomeWrapper = ({ children }: ChildrenProps) => {
  return <div className="">{children}</div>;
};

export default HomeWrapper;
