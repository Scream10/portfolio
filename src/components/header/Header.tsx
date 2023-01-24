import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <div>
        <div className={styles.title}>
          <div>
            <h1 className={styles.aeonik1}>
              <span>F</span>
            </h1>
          </div>
          <div>
            <h1 className={styles.aeonik2}>
              <span>O</span>
            </h1>
          </div>
          <div>
            <h1 className={styles.aeonik3}>
              <span>L</span>
            </h1>
          </div>
          <div>
            <h1 className={styles.aeonik4}>
              <span>I</span>
            </h1>
          </div>
          <div>
            <h1 className={styles.aeonik5}>
              <span>O</span>
            </h1>
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
