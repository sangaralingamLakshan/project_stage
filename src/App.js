import React, { useState } from 'react';
import Login from './Login';
import SignupForm from './Signup'; // Assurez-vous que le chemin est correct
import MainPage from './MainPage';
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    const handleLogin = (userId) => {
        setUserId(userId);
        setIsLoggedIn(true);
    };

    const handleSignup = (username, password) => {
        // Ici, vous pouvez implémenter la logique pour enregistrer l'utilisateur
        console.log(`Inscription réussie pour l'email : ${username}`);
        // Pour l'exemple, nous passons directement à la connexion après l'inscription réussie
        handleLogin(username); // Utilisation de l'email comme identifiant utilisateur pour l'exemple
    };

    return (
        <div className="app-container">
            {isLoggedIn ? (
                <MainPage userId={userId} />
            ) : (
                <>
                    <Login onLogin={handleLogin} />
                    <SignupForm onSignup={handleSignup} />
                </>
            )}
        </div>
    );
}

export default App;
