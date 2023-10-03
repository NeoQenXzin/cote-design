// LanguageProvider.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

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

export const LanguageProvider = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Si la langue n'est pas définie ou si elle est vide, la définir par défaut en anglais
    if (!i18next.language || i18next.language.trim() === '') {
      i18next.changeLanguage('en');
    }
  }, []);

  useEffect(() => {
    if (!i18next.language) {
      // Change la langue en fonction de la route actuelle
      const lang = router.asPath.startsWith('/fr') ? 'fr' : 'en';
      i18next.changeLanguage(lang);
    }
  }, [router?.asPath]);

  const isHomePage = router.pathname === '/';
  const isProjectsPage = router.pathname === '/projects';

  return (
    <>
      {!isHomePage && !isProjectsPage && <Navbar/>}
      {children}
      {!isHomePage && !isProjectsPage && <Footer changeLanguage={(lng) => i18next.changeLanguage(lng)} />}
    </>
  );
};
