import React from "react";
import Link from "next/link";

type ButtonProps = {
  label: string;
  type: string;
  path: string;
};
const Button = ({ label, type, path }: ButtonProps) => {
  return (
    <div className="">
      <Link href={path} className="">
        {label}
      </Link>
    </div>
  );
};

export default Button;
