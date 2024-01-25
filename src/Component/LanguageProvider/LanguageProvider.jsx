import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/translations/{{lng}}/translations.json",
    },
    lng: typeof window === "undefined" ? "en" : i18next.language || "en",
    fallbackLng: "en",
  });

export const LanguageProvider = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const detectLangFromPath = () => {
      const pathLang = router.asPath.split("/")[1]; // Obtient 'fr', 'en', etc.
      const availableLangs = ["en", "fr"]; // Langues disponibles dans votre application

      if (availableLangs.includes(pathLang) && i18next.language !== pathLang) {
        i18next.changeLanguage(pathLang);
      }
    };

    router.events.on("routeChangeComplete", detectLangFromPath);

    // Appel initial pour la première charge de page
    detectLangFromPath();

    return () => {
      router.events.off("routeChangeComplete", detectLangFromPath);
    };
  }, [router?.asPath]);

  const isHomePage = router.pathname === "/";
  const isProjectsPage = router.pathname === "/projects";

  return (
    <Suspense fallback={<div>Chargement des traductions...</div>}>
      {!isHomePage && !isProjectsPage && <Navbar />}
      {children}
      {!isHomePage && !isProjectsPage && (
        <Footer changeLanguage={(lng) => i18next.changeLanguage(lng)} />
      )}
    </Suspense>
  );
};
