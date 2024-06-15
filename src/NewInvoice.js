// NewInvoice.js
import React, { useState } from 'react';

const NewInvoice = () => {
    const [invoiceData, setInvoiceData] = useState({
        customerName: '',
        amount: 0,
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInvoiceData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajouter ici la logique pour envoyer les données de la facture (par exemple, à une API ou un service backend)
        console.log('Données de la facture à envoyer :', invoiceData);
        // Réinitialiser le formulaire après soumission
        setInvoiceData({
            customerName: '',
            amount: 0,
            description: ''
        });
    };

    return (
        <div>
            <h2>Créer une nouvelle facture</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom du client :
                    <input type="text" name="customerName" value={invoiceData.customerName} onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Montant :
                    <input type="number" name="amount" value={invoiceData.amount} onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Description :
                    <textarea name="description" value={invoiceData.description} onChange={handleInputChange} required />
                </label>
                <br />
                <button type="submit">Créer la facture</button>
            </form>
        </div>
    );
};

export default NewInvoice;
