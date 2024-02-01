import React from "react";
import Button from "../button";
import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <Button type="primary" label="View work" path="/projects" />
      <Button type="secondary" label="Contact me" path="/contact" />
    </div>
  );
};

export default Buttons;
