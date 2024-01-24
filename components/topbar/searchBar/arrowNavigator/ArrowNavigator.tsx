import React from "react";
import styles from "./ArrowNavigator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArrowNavigator: React.FC = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} className="arrow left" />
      <FontAwesomeIcon icon={faArrowRight} className="arrow right" />
    </div>
  );
};

export default ArrowNavigator;
