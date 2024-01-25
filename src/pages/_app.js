import { Suspense } from 'react';
import { LanguageProvider } from '../Component/LanguageProvider/LanguageProvider';
// import { useTranslation } from 'react-i18next';
// import Navbar from '../Component/Navbar/Navbar';
// import Footer from '../Component/Footer/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // const { t, i18n } = useTranslation('en', { useSuspense: false });

  return (
    <LanguageProvider>
      {/* <Navbar changeLanguage={(lng) => i18n.changeLanguage(lng)} /> */}
      <Suspense fallback={<div>Chargement...</div>}>
        <Component {...pageProps} />
      </Suspense>
      {/* <Component {...pageProps} /> */}
      {/* <Footer changeLanguage={(lng) => i18n.changeLanguage(lng)} /> */}
    </LanguageProvider>
  );
}
