import '@/styles/globals.css'
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps}) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'; // Vérifie si la page actuelle est la page d'accueil

  return (
    <>
      {!isHomePage && <Navbar />} {/* Affiche la Navbar si ce n'est pas la page d'accueil */}
      <Component {...pageProps} />
      {!isHomePage && <Footer />} {/* Affiche le Footer si ce n'est pas la page d'accueil */}
    </>
  );
}
