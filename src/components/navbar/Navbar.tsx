import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const handleIsDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

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
