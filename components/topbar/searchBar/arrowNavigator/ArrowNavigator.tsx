import React from "react";
import styles from "./ArrowNavigator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ArrowNavigator: React.FC = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon="arrow-left" className="arrow left" />
      <FontAwesomeIcon icon="arrow-right" className="arrow right" />
    </div>
  );
};

export default ArrowNavigator;
