// Login.js
import React, { useState } from 'react';
import styles from './Login.module.css'; // Du kannst ein CSS-Modul für Stile verwenden
import axios from 'axios';

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand für den Login-Status

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', JSON.stringify({
        "email":email,
        "password":password,
      }),{ headers: {  "Content-Type": "application/json"  }
      });

      if (response.status === 200) {
        setSuccessMessage("Login erfolgreich!");
        setIsLoggedIn(true);
        onLogin(response);
        // Hier kannst du den Benutzer weiterleiten oder den Status aktualisieren
      } else {
        setErrorMessage("Login fehlgeschlagen!");
      }
    } catch (error) {
      console.error("Es gab einen Fehler beim Login:", error);
      console.log(error.message);
      setErrorMessage("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
    }
  };

  return (

      <div className={styles.container}>
        {isLoggedIn ? (
            <h2>Willkommen zurück, {email}!</h2> // Zeige eine Willkommensnachricht an
        ) : (
            <>
        <h2>Login</h2>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <form onSubmit={loginHandler}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-Mail:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Passwort:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          </div>
          <button type="submit">Einloggen</button>
          <button type="button" onClick={onClose}>Abbrechen</button> {/* Abbrechen-Button */}
        </form>
            </>
            )}
      </div>
  );
};

export default Login;