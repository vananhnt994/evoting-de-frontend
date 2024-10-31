// Login.js
import React, { useState } from 'react';
import styles from './Login.module.css'; // Du kannst ein CSS-Modul für Stile verwenden

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Fehler beim Login');

      setSuccessMessage('Login erfolgreich!');
      onClose(); // Schließe das Formular nach erfolgreichem Login
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
      <div className={styles.container}>
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
      </div>
  );
};

export default Login;