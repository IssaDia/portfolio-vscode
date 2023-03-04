import React from "react";
import Button from "../button/Button";
import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <Button type="primary" label="View work" path="/projects" />
      <Button type="primary" label="View work" path="/projects" />
    </div>
  );
};

export default Buttons;
