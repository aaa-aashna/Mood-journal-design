import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.signInButton}>
        <span className={styles.signInText}>Sign In</span>
      </div>
    </div>
  );
};

export default Header;
