import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import img1 from '../../public/assets/logos/logoLight.png';
import img1 from '../../public/assets/logos/logoDark.png';
import flagFr from '../../public/assets/icones/flag-fr.gif';
import flagEng from '../../public/assets/icones/flag-eng.gif';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  const { t, i18n } = useTranslation();

  const setLocaleEn = () => {
    i18n.changeLanguage('en');
  };

  const setLocaleFr = () => {
    i18n.changeLanguage('fr');
  };

  // Diaporama Background
  const backgroundImages = [
    // 'assets/img/backgroundHome/img0.jpeg',
    'assets/img/backgroundHome/img5.jpg',
    'assets/img/backgroundHome/img4.jpg',
    // 'assets/img/backgroundHome/img1.jpeg',
    'assets/img/backgroundHome/img6.jpg',
    'assets/img/backgroundHome/img7.jpg',
    // 'assets/img/backgroundHome/img2.jpeg',
    'assets/img/backgroundHome/img3.jpeg',
    // Ajoutez d'autres URL d'images ici
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Durée de chaque image

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Head>
        <title>Coté Design - Architecture & Mise en Oeuvre</title>
        <meta name="description" content="Coté Design offre des services professionnels en architecture et mise en oeuvre pour vos projets de construction et de rénovation à Valbonne. Découvrez nos services." />
        <meta name="keywords" content="Architecture, Design Intérieur, Décoration, Rénovation, Architecture Durable, Design de Luxe, Éco-responsable, Architecture Moderne, Planification d'Espace, Solutions de Design Personnalisées, Intérieurs Contemporains, Design Résidentiel, Design Commercial, Design Urbain, Architecture Paysagère, Gestion de Projet, Design Créatif, Architecture Innovante, Espaces Fonctionnels, Design Environnemental, Consultation de Design, Bâtiments Écoénergétiques, Design Minimaliste, Intérieurs Sur Mesure, Architecture Culturelle, Réutilisation Adaptative, Intérieurs Artistiques, Restauration de Bâtiments, Styling Intérieur, Visualisation Architecturale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <div className="logo"><Image className={styles.logoImg} src={img1} alt='Logo côté design' priority /></div>
            <div className={styles.textLogo}>ARCHITECTURE & MISE EN OEUVRE</div>
            <div className={styles.textAdress}>
              <p>4 rue Gambetta 06560 Valbonne</p>
            </div>

            <div className={styles.flagContainer}>
              <div >
                <Link href={'accueil'} onClick={setLocaleFr}>
                  <Image className={styles.flagFrench} src={flagFr} width="70" height="49" alt='French flag' />
                  <br></br><span> Fr</span>
                </Link>
              </div>
              <div className="flag-english">
                <Link className='navbar-brand mx-4' href={'/accueil'} onClick={setLocaleEn}>
                  <Image className={styles.flagFrench} src={flagEng} width="70" height="49" alt='English flag' />
                  <br></br><span> Eng</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1>Bienvenue sur coté Design</h1>

        {/* Background diaporama  */}
        {/* <section className={styles.backgroundSection}>

          <div className={`${styles.backgroundImage} ${styles.animate}`} style={backgroundImageStyle}></div>
          <div className={styles.scanlines}></div>
        </section> */}
        {/* Scanlines  */}
        <div className={styles.container}>

          <section className={styles.backgroundSection}>
            {backgroundImages.map((imageUrl, index) => (
              <div
                key={index}
                className={`${styles.backgroundImage} ${currentImageIndex === index ? styles.active : ''}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            ))}
            <div className={styles.scanlines}></div>
          </section>
        </div>
      </main>
    </>
  )
}
