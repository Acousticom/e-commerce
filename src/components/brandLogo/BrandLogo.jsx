import React from "react";
import brandLogo from '../../assest/brandLogo.png'
import styles from './BrandLogo.module.css'

const BrandLogo = () => {
  return (
    <div>
      <div className={styles.brand}>
        <img src={brandLogo} alt="" className={styles.brandLogo} />
        <h1 className={styles.brandName}>Clothify</h1>
      </div>
    </div>
  );
};

export default BrandLogo;
