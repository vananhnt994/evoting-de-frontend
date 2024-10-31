// App.js
import './App.css'; // Importiere das CSS-Stylesheet
import React, { useState } from 'react';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";// Importiere die Login-Komponente
import Header from "./components/Header/Header";

const App = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // Zustand für das Login-Formular

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false); // Schließe das Login-Formular bei Signup-Klick
    };

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false); // Schließe das Signup-Formular bei Login-Klick
    };

    const handleCloseSignup = () => {
        setShowSignup(false);
    };

    const handleCloseLogin = () => {
        setShowLogin(false); // Setze den Zustand zurück auf false für das Login-Formular
    };

    return (
        <div>
            <Header
                onSignupClick={handleSignupClick}
                onLoginClick={handleLoginClick}
            />
            {showSignup && <Signup onClose={handleCloseSignup} />}
            {showLogin && <Login onClose={handleCloseLogin} />} {/* Zeige das Login-Formular an */}
        </div>
    );
};

export default App;