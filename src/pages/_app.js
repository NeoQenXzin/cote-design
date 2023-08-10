import { useRouter } from 'next/router';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import '@/styles/globals.css';



i18next
.use(Backend)
.use(initReactI18next)
.init({
  backend: {
    loadPath: '/translations/{{lng}}/translations.json',
  },
  lng: 'en',
  fallbackLng: 'en',
});


export default function App({ Component, pageProps }) {

  const { t, i18n } = useTranslation('en', { useSuspense: false });

  const router = useRouter();
  const isHomePage = router.pathname === '/'; // Vérifie si la page actuelle est la page d'accueil
  const isProjectsPage = router.pathname === '/projects'; // Vérifie si la page actuelle est la page projects/index.js


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {!isHomePage  && !isProjectsPage && <Navbar  changeLanguage={changeLanguage}/>} {/* Affiche la Navbar si ce n'est pas la page d'accueil */}
      <Component {...pageProps}  />
      {!isHomePage  && !isProjectsPage && <Footer  changeLanguage={changeLanguage}/>} {/* Affiche le Footer si ce n'est pas la page d'accueil */}
    </>
  );
}
