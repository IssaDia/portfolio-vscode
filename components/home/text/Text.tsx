import React from "react";
import styles from "./Text.module.css";

type TextProps = {
  text: String;
};

const Text = ({ text }: TextProps) => {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
