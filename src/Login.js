import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Validez ici les champs email et mot de passe si nécessaire
    // Puis appelez la fonction de gestion de connexion fournie par le parent
    onLogin(email); // Pour l'exemple, on passe l'email comme identifiant
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Connexion à Facturama</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLoginClick}>Connexion</button>
        <p>OU</p>
        <button className="google-login">Connexion avec Google</button>
        <button className="apple-login">Connexion avec Apple</button>
        <div className="links">
          <a href="#">Langue</a>
          <a href="#">S'inscrire</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
