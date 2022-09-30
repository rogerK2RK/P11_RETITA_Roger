import logo from '../../assets/LOGO-blanche.png';
import styles from './styles.module.css';
import React from 'react';
// import { Link } from "react-router-dom";

function Foot() {
  
  return (
      <footer className={styles["foot-section"]}>
        <img src={logo} className={styles["logo"]} alt="logo-kasa" />
        <p className={styles["text"]}> © 2020 Kasa. All rights reserved</p>
      </footer>
  );
}

export default Foot ;

