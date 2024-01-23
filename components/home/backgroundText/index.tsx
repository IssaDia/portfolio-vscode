import React from "react";
import styles from "./BackgroundText.module.css";

type BackgroundTextProps = {
  text: String;
};
const BackgroundText = ({ text }: BackgroundTextProps) => {
  return (
    <div>
      <p className={styles.textContainer}>{text}</p>
    </div>
  );
};

export default BackgroundText;
