// Signup.js
import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = ({ onClose,onRegister }) => { // Füge onClose als Prop hinzu
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(false); // Zustand für den Registrierungsstatus

    const signUpHandler = async (e) => {
        e.preventDefault();
        const userData = { email, password, firstName, lastName, address, birthday };

        try {
            console.log(JSON.stringify(userData))
            const response = await fetch('http://localhost:8080/api/signup', {
                //mode: 'no-cors',
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(userData),
            })

            if (!response.ok){
                let errorMess = await  response.text()
                throw new Error(errorMess);
            }
            const data = await response.json();
            setIsRegistered(true);
            onRegister(response);
            setSuccessMessage('Signup erfolgreich! Deine Benutzer-ID ist: ' + data.id);
            onClose();
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className={styles.container}>
            {isRegistered ? (
                <h2>Willkommen, {firstName}, {lastName}!</h2> // Zeige eine Willkommensnachricht an
            ) : (
                <>
            <h2>Signup</h2>

            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

            <form onSubmit={signUpHandler}>
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
                <div className={styles.formGroup}>
                    <label htmlFor="signup-confirm-password">Passwort bestätigen:</label>
                    <input
                        type="password"
                        id="confirm-password" // ID für das Bestätigungsfeld
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">Vorname:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Nachname:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Adresse:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="birthday">Geburtstag:</label>
                        <input
                            type="date"
                            id="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Registrieren</button>
                    <button type="button" onClick={onClose}>Abbrechen</button>

            </form>
                </>
            )}
        </div>
);
};

export default Signup;