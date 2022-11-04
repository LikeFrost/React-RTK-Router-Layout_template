import React from 'react';
import logoImg from './banner.png';
import styles from './index.module.less';

function Logo({ logo = logoImg, text }) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.text}>{ text}</div>
    </div>
  );
}

export default Logo;
