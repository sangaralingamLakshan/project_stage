import React, { useState } from 'react';

const SignupForm = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Appeler la fonction onSignup pour transmettre les données d'inscription
        onSignup(username, password);
    };

    return (
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">S'inscrire</button>
        </form>
    );
};

export default SignupForm;
