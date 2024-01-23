import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  label: string;
  type: string;
  path: string;
};
const Button = ({ label, type, path }: ButtonProps) => {
  return (
    <div className={styles.container}>
      <Link href={path} className={styles[type]}>
        {label}
      </Link>
    </div>
  );
};

export default Button;
