import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <div>
        <div className={styles.title}>
          <div>
            <h1 className={styles.aeonik}>F</h1>
          </div>
          <div>
            <h1 className={styles.aeonik}>O</h1>
          </div>
          <div>
            <h1 className={styles.aeonik}>L</h1>
          </div>
          <div>
            <h1 className={styles.aeonik}>I</h1>
          </div>
          <div>
            <h1 className={styles.aeonik}>O</h1>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div>
          <p className={styles.ambit}>WEB & MOBILE DEVELOPER</p>
        </div>
        <div className={styles.canelaContainer}>
          <h1 className={styles.canela}>NICOLAS DIOT</h1>
        </div>
        <div>
          <h5 className={styles.ambitSmall}>© 2023</h5>
        </div>
      </div>
    </section>
  );
};

export default Header;
