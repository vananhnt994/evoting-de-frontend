// Header.js
import React from 'react';
import styles from './Header.module.css'; // Importiere das CSS-Modul

const Header = ({ onSignupClick, onLoginClick }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Meine Homepage</h1>
            <div>
                <button className={styles.button} onClick={onSignupClick}>Signup</button>
                <button className={styles.button} onClick={onLoginClick}>Login</button>
            </div>
        </header>
    );
};

export default Header;