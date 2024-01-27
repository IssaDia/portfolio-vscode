// ActiveLink.js
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

interface ActiveLinkProps {
  children: (isActive: boolean) => ReactElement;
  href: string;
  activeClassName?: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  activeClassName = "",
}) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  if (typeof children === "function") {
    return children(isActive);
  }

  return <>{children}</>; // Fallback for non-function children, though your use case might not need this
};

export default ActiveLink;
