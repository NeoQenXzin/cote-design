import React, { useState } from 'react';
import style from '../styles/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });


  const { nom, prenom, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification et validation des données du formulaire
        // Validation des champs du formulaire
        const isValid = validateForm();
    // Ici, tu peux ajouter une logique pour envoyer l'e-mail à cote-design06@orange.fr
    // en utilisant une bibliothèque de gestion d'e-mails ou un service d'envoi d'e-mails

    // Réinitialiser le formulaire après l'envoi
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      message: ''
    });
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,26}$/; // Regex pour les noms et prénoms (lettres et espaces uniquement)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour les adresses e-mail (validation de base)


    let isValid = true;
    const errors = {};

    // Validation du nom
    if (!nameRegex.test(nom)) {
      isValid = false;
      errors.nom = 'Le nom est invalide.';
      console.log('Le nom est invalide.');
    }

    // Validation du prénom
    if (!nameRegex.test(prenom)) {
      isValid = false;
      errors.prenom = 'Le prenom est invalide.';
      console.log('Le prénom est invalide.');
    }

    // Validation de l'e-mail
    if (!emailRegex.test(email) || email.length > 50) {
      isValid = false;
      errors.email = "L' email est invalide.";
      console.log('L\'e-mail est invalide.');
    }

    // Validation du message
    const isSafeMessage = !(/[<>]/g).test(message); // Vérification de l'absence des caractères "<" et ">"
    if (message.length < 5 || !isSafeMessage) {
      isValid = false;
      errors.message = 'Le message est invalide.';
      console.log('Le message est invalide.');
    }
    setFormErrors(errors);
    return isValid;
  };

  return (
    <div>
      <h1>Contactez-nous :</h1>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" value={nom} onChange={handleChange} />
          {formErrors.nom && <div className={style.error}>{formErrors.nom}</div>}

        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom" value={prenom} onChange={handleChange} />
          {formErrors.prenom && <div className={style.error}>{formErrors.prenom}</div>}
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} />
          {formErrors.email && <div className={style.error}>{formErrors.email}</div>}
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" value={message} onChange={handleChange} />
          {formErrors.message && <div className={style.error}>{formErrors.message}</div>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
