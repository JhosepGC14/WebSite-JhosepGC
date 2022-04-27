import React from "react";
import styles from "./item.interest.module.css";

interface PropsItemInterest {
  text: string;
}

const ItemInterest = ({ text }: PropsItemInterest) => {
  return (
    <div className={styles.interest}>
      <span>{text}</span>
    </div>
  );
};

export default ItemInterest;
