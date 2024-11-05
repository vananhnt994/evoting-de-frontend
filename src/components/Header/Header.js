import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom"; // Stelle sicher, dass du die richtigen Styles importierst

const Header = ({ isLoggedIn, onSignupClick, onLoginClick, onLogoutClick }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Meine Homepage</h1>
            <div>
                {!isLoggedIn ? (
                    <>
                        <button className={styles.button} onClick={onSignupClick}>Signup</button>
                        <button className={styles.button} onClick={onLoginClick}>Login</button>
                    </>
                ) : (
                    <>
                    <Link to="/topics">
                        <button className={styles.button}>Topics</button> {/* Button für Topics */}
                    </Link>
                    <button className={styles.button} onClick={onLogoutClick}>Ausloggen</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;