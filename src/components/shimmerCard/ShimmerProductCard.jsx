import React from "react";
import styles from "./ShimmerProductCard.module.css";

const ShimmerProductCard = () => {
  return (
    <>
      {new Array(9).fill(1).map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.img}></div>
              <p className={`${styles.brand} ${styles.li}`}></p>
              <p className={`${styles.desc} ${styles.li}`}></p>
              <p className={`${styles.price} ${styles.li}`}></p>
              <p className={`${styles.off} ${styles.li}`}></p>
        </div>
      ))}
    </>
  );
};

export default ShimmerProductCard;
