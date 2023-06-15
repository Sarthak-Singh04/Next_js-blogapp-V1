import React, { useContext } from 'react';
import styles from './dark.module.css';
import { ThemeContext } from '@/app/context/Themecontext';

const Darkmoddle = () => {
    const {toggle,mode}=useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>
        🌛 {/* Half Moon Emoji */}
      </div>
      <div className={styles.icon}>
        ☀️ {/* Sun Emoji */}
      </div>
      <div className={styles.ball} style={mode==="light" ? {left:"2px"} :{right:"2px"}}/>
    </div>
  );
};

export default Darkmoddle;
