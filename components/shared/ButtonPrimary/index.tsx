import React from "react";
import styles from "./buttonPrimary.module.css";

interface PropsButtonPrimary {
  textButton: string;
}

const ButtonPrimary = ({ textButton }: PropsButtonPrimary) => {
  return (
    <button className={styles.button__skills}>
      {textButton}
    </button>
  );
};

export default ButtonPrimary;
