import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_footer}>
        <div>
          <p>&copy;</p>
          <p id="fecha"></p>
          <p>Todos los derechos reservados</p>
        </div>
        <div className={styles.images_footer}>
          <div className={styles.container_social}>
            <img src="/img/icons/facebook.svg" alt="facebook-logo" />
          </div>
          <div className={styles.container_social}>
            <img src="/img/icons/linkedin.svg" alt="linkedin-logo" />
          </div>
          <div className={styles.container_social}>
            <img src="/img/icons/twitter.svg" alt="twitter-logo" />
          </div>
          <div className={styles.container_social}>
            <img src="/img/icons/github.svg" alt="github-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
