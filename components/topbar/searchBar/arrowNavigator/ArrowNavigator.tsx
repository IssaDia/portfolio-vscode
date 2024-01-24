import React from "react";
import styles from "./ArrowNavigator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArrowNavigator: React.FC = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} className="arrow left" />
      <FontAwesomeIcon icon={faArrowRight} className="arrow right" />
      <h1 className="text-3xl font-bold underline">Hello world!1</h1>
    </div>
  );
};

export default ArrowNavigator;
