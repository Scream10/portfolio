import React from "react";
import styles from "./Footer.module.css";
import { FiArrowUpRight } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div>
          <p className={styles.ambit12px}>CONTACT</p>
          <p className={styles.ambitbold20px}>Get in Touch</p>
          <div className={styles.description}>
            <p className={styles.ambit12px}>
              I’M ALWAYS LOOKING FOR MY NEXT CHALLENGE IN AN INTERESTING PROJECT
              OR TEAM.
            </p>
          </div>
          <div className={styles.inquireContainer}>
            <p className={styles.ambitbold12px}>
              INQUIRE
              <FiArrowUpRight size={18} className={styles.arrowIcon} />
            </p>
            <p className={styles.ambitbold12pxHide}>
              INQUIRE
              <FiArrowUpRight size={18} className={styles.arrowIcon} />
            </p>
          </div>
        </div>
        <div className={styles.footerRightContent}>
          <div className={styles.rightSection}>
            <p className={styles.ambit12px}>INFO</p>
            <div className={styles.informationContainer}>
              <p className={styles.ambitbold12px}>Email Address</p>
              <div className={styles.link}>
                <a className={styles.ambit12px}>nicolasdiot10@gmail.com</a>
                <div className={styles.linkUnderline} />
              </div>
            </div>
            <div className={styles.informationContainer}>
              <p className={styles.ambitbold12px}>Design</p>
              <div className={styles.link}>
                <a className={styles.ambit12px}>Inspired by Kylinn Jimenez</a>
                <div className={styles.linkUnderline} />
              </div>
            </div>
          </div>
          <div>
            <p className={styles.ambit12px}>CONNECT</p>
            <div className={styles.linkTop}>
              <a className={styles.ambitbold12px}>LinkedIn</a>
              <div className={styles.linkUnderline} />
            </div>
            <div className={styles.linkExternal}>
              <a className={styles.ambitbold12px}>Malt</a>
              <div className={styles.linkUnderline} />
            </div>
            <div className={styles.linkExternal}>
              <a className={styles.ambitbold12px}>GitHub</a>
              <div className={styles.linkUnderline} />
            </div>
            <div className={styles.linkExternal}>
              <a className={styles.ambitbold12px}>Dribble</a>
              <div className={styles.linkUnderline} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.animatedFooter}>
        <div className={styles.track}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (_, index) => (
              <div className={styles.containerText} key={index}>
                <p className={styles.ambit12px}>
                  WEBSITE & MOBILE DEVELOPMENT BY YOURS TRULY
                </p>
                <div>
                  <p className={styles.ambitbold14px}>ND © 2023</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
