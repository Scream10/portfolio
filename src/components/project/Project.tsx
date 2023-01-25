import Image from "next/image";
import React from "react";
import stylesNavbar from "../navbar/Navbar.module.css";
import styles from "./Project.module.css";

const Project: React.FC = () => {
  return (
    <a className={styles.container}>
      <div className={styles.informationTop}>
        <p className={styles.ambit12px}>2022</p>
        <div className={stylesNavbar.container}>
          <div className={stylesNavbar.dotActive} />
          <div className={stylesNavbar.dot} />
        </div>
      </div>
      <div className={styles.wrapperImage}>
        <Image
          src="https://uploads-ssl.webflow.com/63a0aa6e91ca3f2ab8073072/63a493246709520f3049cfb5_Macbook%20Pro.png"
          alt="fake project"
          width={298}
          height={172}
          className={styles.image}
        />
      </div>
      <div className={styles.informationBottom}>
        <h3 className={styles.ambitbold20px}>Han Huante</h3>
        <h4 className={styles.ambit12px}>EXPLORE PROJECT</h4>
      </div>
    </a>
  );
};

export default Project;
