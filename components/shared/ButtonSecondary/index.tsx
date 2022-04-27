import React from "react";
import styles from "./buttonSecondary.module.css";

interface PropsButtonSecondary {
  textButton: string;
}

const ButtonSecondary = ({ textButton }: PropsButtonSecondary) => {
  return (
    <button className={styles.button__secondary} id="btnSocial">
      {textButton}
    </button>
  );
};

export default ButtonSecondary;
