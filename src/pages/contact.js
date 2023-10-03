import React, { useState } from 'react';
import style from '../styles/Contact.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Localisation 
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import Villa from "../../public/assets/img/villa-contact.jpg"
import Tel from "../../public/assets/icones/appel.png"
import Mail from "../../public/assets/icones/message.png"
import Epingle from "../../public/assets/icones/epingle.png"

// Icon localisation
// const icon = '/assets/icones/marker-icon-2x.png';
// const iconShadow = '/assets/icones/marker-shadow.png';
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: icon,
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });

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
        const isValid = validateForm();
        // Ici, tu peux ajouter une logique pour envoyer l'e-mail à cote-design06@orange.fr
        // en utilisant une bibliothèque de gestion d'e-mails ou un service d'envoi d'e-mails

        // Réinitialiser le formulaire après l'envoi
        isValid ?
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                message: ''
            }) : alert("Le formulaire n'est pas valide");
    };

    // Validation des champs du formulaire
    const validateForm = () => {
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,26}$/; // Regex pour les noms et prénoms (lettres et espaces uniquement)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour les adresses e-mail (validation de base)


        let isValid = true;
        const errors = {};

        // Validation du nom
        if (!nameRegex.test(nom)) {
            isValid = false;
            errors.nom = 'Le nom est invalide.';
            // console.log('Le nom est invalide.');
        }

        // Validation du prénom
        if (!nameRegex.test(prenom)) {
            isValid = false;
            errors.prenom = 'Le prenom est invalide.';
            // console.log('Le prénom est invalide.');
        }

        // Validation de l'e-mail
        if (!emailRegex.test(email) || email.length > 50) {
            isValid = false;
            errors.email = "L' email est invalide.";
            // console.log('L\'e-mail est invalide.');
        }

        // Validation du message
        const isSafeMessage = !(/[<>]/g).test(message); // Vérification de l'absence des caractères "<" et ">"
        if (message.length < 5 || !isSafeMessage) {
            isValid = false;
            errors.message = 'Le message est invalide.';
            // console.log('Le message est invalide.');
        }
        setFormErrors(errors);
        return isValid;
    };

    // Adresse carte localisation 
    const position = [43.614213, 7.047299]; // Latitude et longitude

    return (<>
        <div className={style.main}>
            <div className={style.containerImage}>
                <Image className={style.imgContact} src={Villa} alt="villa" fill objectFit='cover' />
            </div>
            <div className={style.containerContact}>

                <span className={style.spanBorder}></span>
                <h1 className={style.h1Form}>Contactez-nous :</h1>
                <div className={style.containerMain}>

                    {/* Ajoute cette partie pour afficher la carte */}
                    <div className={style.containerForm}>

                        <form className={style.formContainer} onSubmit={handleSubmit}>
                            <div className={style.champs}>
                                <label htmlFor="nom">Nom :</label>
                                <input type="text" id="nom" name="nom" value={nom} onChange={handleChange} />
                                {formErrors.nom && <div className={style.error}>{formErrors.nom}</div>}

                            </div>
                            <div className={style.champs}>
                                <label htmlFor="prenom">Prénom :</label>
                                <input type="text" id="prenom" name="prenom" value={prenom} onChange={handleChange} />
                                {formErrors.prenom && <div className={style.error}>{formErrors.prenom}</div>}
                            </div>
                            <div className={style.champs}>
                                <label htmlFor="email">Email :</label>
                                <input type="email" id="email" name="email" value={email} onChange={handleChange} />
                                {formErrors.email && <div className={style.error}>{formErrors.email}</div>}
                            </div>
                            <div className={style.champs}>
                                <label htmlFor="message">Message :</label>
                                <textarea id="message" name="message" value={message} onChange={handleChange} />
                                {formErrors.message && <div className={style.error}>{formErrors.message}</div>}
                            </div>

                            <button className={style.contactButton} type="submit"> <span className={style.textContainer}>
                                <span className={style.text}>Envoyer</span>
                            </span></button>
                        </form>
                    </div>

                    <div>
                    </div>

                </div>
            </div>
        </div>

        <div className={style.separation}></div>
            <span className={style.infoEntreprise}>
                    Côté Design II <br></br>
                    {/* Architecte d'Intérieur <br></br>
                    Mise en oeuvre */}
                    </span>
<div className={style.containerLast}>

        <div className={style.infosContact}>
            <span className={style.infoAdresse}>
                <Image className={style.imgContactSpan} src={Epingle} alt="villa" />
                    4 rue Gambetta <br></br>
                    06560 Valbonne</span>
            <span className={style.infocontact}>
            <Image className={style.imgContactSpan} src={Tel} alt="villa" />
                    Brigitte Carteret :
                    +33 (0)6 09 27 60 15
                    <br></br> <br></br>
                    {/* </span>
            <span className={style.infocontact}> */}
                Louise Mampaey :
                +33 (0)6 09 27 59 72
                </span>
            <span className={style.infoMail}>
            <Image className={style.imgContactSpan} src={Mail} alt="villa" />
            <a href="mailto:cote-design06@orange.fr">cote-design06@orange.fr</a>
 </span>
        </div>

        {/* <div className={style.containerMap} style={{ height: '400px', display: 'inline-flex', justifyContent: 'center', margin: '0 auto', maxWidth: '700px', width: '50%' }}>
            <MapContainer center={position} zoom={16} maxZoom={18} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                    />
                <Marker position={position} />
                <Marker position={position}>
                    <Popup>
                        4 rue Gambetta, 06560 Valbonne, FRANCE
                    </Popup>
                </Marker>
            </MapContainer>

        </div> */}

                    </div>
                    <div className={style.navigation}>
        <Link href="/accueil">  
        <svg
            className={`${style.arrowIcon} ${style.leftArrow}`}
            fill="#625b5b"
            height="212px"
            width="212px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.21 476.21"
            xmlSpace="preserve"
            stroke="#625b5b"
            strokeWidth="0.004762130000000001"
          >
            <polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"></polygon>
          </svg>
            Retourner a la page d'accueil
        </Link>
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg
            className={`${style.arrowIcon} ${style.upwardArrow}`}
            fill="#625b5b"
            height="212px"
            width="212px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.21 476.21"
            xmlSpace="preserve"
            stroke="#625b5b"
            strokeWidth="0.004762130000000001"
            transform="rotate(270)matrix(-1, 0, 0, -1, 0, 0)"
          >
            <polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"></polygon>
          </svg>
       
          Remonter en haut
        </Link>
      </div>
    </>
    );
}


