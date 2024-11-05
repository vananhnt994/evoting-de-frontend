// App.js
import './App.css'; // Importiere das CSS-Stylesheet
import React, { useState } from 'react';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";// Importiere die Login-Komponente
import Header from "./components/Header/Header";
import TopicList from "./components/TopicList/TopicList";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importiere Router-Komponenten

const App = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // Zustand für das Login-Formular
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand für den Login-Status
    const [address, setAddress] = useState('');

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
    const handleRegister = (response) => {
        if (response.status === 200) {
            setAddress(response.data.address);
            setIsLoggedIn(true); // Setze den Benutzer als eingeloggt nach erfolgreicher Registrierung.
            alert("Erfolgreiche Registrierung!"); // Hier kannst du auch einen Toast verwenden.
        }
    }
    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    const handleLogin = (response) => {
        if(response.status === 200) {
            setIsLoggedIn(true);
            setAddress(response.data.address);
        }
    };

    const handleLogout = () => {
        // Hier sollte deine Logik für das Ausloggen sein
        setIsLoggedIn(false);
    };

    return (
        <Router>
        <div className="App">
            <Header
                isLoggedIn={isLoggedIn}
                onSignupClick={handleSignupClick}
                onLoginClick={handleLoginClick}
                onLogoutClick={handleLogout}
            />
            {!isLoggedIn ? (
                <div>
                    {showSignup && <Signup onClose={handleCloseSignup} onRegister={handleRegister} />}
                    {showLogin && <Login onClose={handleCloseLogin} onLogin={handleLogin} />} {/* Zeige das Login-Formular an */}
                </div> // Button zum Einloggen
            ) : (
                <>
                {address && <TopicList address={address}/>}
                </>
            )}
            <Routes>
                <Route path="/topics" element={isLoggedIn ? <TopicList address={address} /> : <Navigate to="/login" />} />
            </Routes>
            <ToastContainer />
        </div>
        </Router>
    );
};

export default App;