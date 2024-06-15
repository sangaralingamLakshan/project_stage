// src/MainPage.js
import React, { useState } from 'react';
import NewInvoice from './NewInvoice';
import './MainPage.css';

function MainPage({ userId }) {
  const [showNewInvoice, setShowNewInvoice] = useState(false);

  const handleNewInvoiceClick = () => {
    setShowNewInvoice(true);
  };

  const handleInvoiceCreated = () => {
    setShowNewInvoice(false);
    // Actualisez la liste des factures si nécessaire
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="navbar-logo">FACTURAMA</div>
        <div className="navbar-links">
          <a href="#">Accueil</a>
          <a href="#">Clients</a>
          <a href="#">Produits</a>
          <a href="#">Factures</a>
          <a href="#">Devis</a>
          <a href="#">Rapprochement</a>
          <a href="#">Gestion du Temps</a>
          <a href="#">Rapports</a>
        </div>
        <div className="navbar-user">
          <a href="#">Premium</a>
          <a href="#">Aide</a>
          <a href="#">Mon Compte</a>
          <a href="#">Déconnexion</a>
        </div>
      </nav>
      <div className="content">
        <div className="welcome-section">
          <h1>Bienvenue sur Facturama</h1>
          <p>Gérez facilement vos factures et clients.</p>
          <button className="new-invoice-button" onClick={handleNewInvoiceClick}>Nouvelle facture</button>
        </div>
        {showNewInvoice && <NewInvoice userId={userId} onInvoiceCreated={handleInvoiceCreated} />}
        {/* Autres sections comme les notifications et le résumé peuvent aller ici */}
      </div>
    </div>
  );
}

export default MainPage;
