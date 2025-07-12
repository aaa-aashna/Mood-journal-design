import React from "react";
import styles from "../styles/BackgroundImage.module.css";

const BackgroundImage = ({ children }) => {
  return <div className={styles.backgroundImage}>{children}</div>;
};

export default BackgroundImage;
