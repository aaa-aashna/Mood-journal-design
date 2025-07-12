import React from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <BackgroundImage>
        <Header />
        <img
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/se9wifkIKd/xt1xeicg_expires_30_days.png"}
          className={styles.mainImage}
          alt="Main"
        />
      </BackgroundImage>
    </div>
  );
};

export default Home;
