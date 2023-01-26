import useWindowSize from "@/hooks/useWindowSize";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const { width } = useWindowSize();

  const handleIsDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  if (width && width >= 767) {
    return (
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <a className={styles.navLeftContent}>
            <h5 className={styles.ambit}>ND ©</h5>
            <h5 className={styles.ambitHide}>ND ©</h5>
          </a>
          <a className={styles.navLeftContent}>
            <h5 className={styles.ambit400}>ABOUT</h5>
            <h5 className={styles.ambit400Hide}>ABOUT</h5>
          </a>
          <a className={styles.navLeftContent}>
            <h5 className={styles.ambit400}>PROJECTS</h5>
            <h5 className={styles.ambit400Hide}>PROJECTS</h5>
          </a>
        </div>
        <div className={styles.navLeft}>
          <a className={styles.navRightContent}>
            <h5 className={styles.ambit400}>CONTACT</h5>
            <h5 className={styles.ambit400Hide}>CONTACT</h5>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nav}>
      <a>
        <h5 className={styles.ambit}>ND ©</h5>
      </a>
      <div className={styles.container}>
        <a onClick={handleIsDarkTheme}>
          <div className={isDarkTheme ? styles.dotActive : styles.dot} />
        </a>
        <a onClick={handleIsDarkTheme}>
          <div className={!isDarkTheme ? styles.dotActive : styles.dot} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
