import React from "react";
import styles from "./Title.module.css";

type TitleProps = {
  surname: String;
  lastname: String;
};

const Title = ({ surname, lastname }: TitleProps) => {
  return (
    <div className={styles.container}>
      <span>{surname}</span>
      <span>{lastname}</span>
    </div>
  );
};

export default Title;
