import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div>
          <p>CONTACT</p>
          <p>Get in Touch</p>
          <p>
            I’M ALWAYS LOOKING FOR MY NEXT CHALLENGE IN AN INTERESTING PROJECT
            OR TEAM.
          </p>
          <p>INQUIRE</p>
        </div>
        <div>
          <div>
            <p>INFO</p>
            <p>Email Address</p>
            <p>nicolasdiot10@gmail.com</p>
            <p>Design</p>
            <p>Inspired by Kylinn Jimenez</p>
          </div>
          <div>
            <p>CONNECT</p>
            <p>LinkedIn</p>
            <p>Malt</p>
            <p>GitHub</p>
            <p>Dribble</p>
          </div>
        </div>
      </div>
      <div className={styles.animatedFooter}></div>
    </div>
  );
};

export default Footer;
