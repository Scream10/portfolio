import Image from "next/image";
import React, { useState } from "react";
import stylesNavbar from "../navbar/Navbar.module.css";
import styles from "./Project.module.css";

const Project: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const handleIsDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <a className={styles.container}>
        <div className={styles.informationTop}>
          <p className={styles.ambit12px}>2022</p>
          <div className={stylesNavbar.container}>
            <a onClick={handleIsDarkTheme}>
              <div
                className={
                  isDarkTheme ? stylesNavbar.dotActive : stylesNavbar.dot
                }
              />
            </a>
            <a onClick={handleIsDarkTheme}>
              <div
                className={
                  !isDarkTheme ? stylesNavbar.dotActive : stylesNavbar.dot
                }
              />
            </a>
          </div>
        </div>
        <Image
          src="https://uploads-ssl.webflow.com/63a0aa6e91ca3f2ab8073072/63a493246709520f3049cfb5_Macbook%20Pro.png"
          alt="fake project"
          width={298}
          height={172}
        />
        <div className={styles.informationBottom}>
          <h3 className={styles.ambitbold20px}>Han Huante</h3>
          <h4 className={styles.ambit12px}>EXPLORE PROJECT</h4>
        </div>
      </a>
    </div>
  );
};

export default Project;
