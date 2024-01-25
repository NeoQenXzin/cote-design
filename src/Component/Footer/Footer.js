import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Footer.module.css';

export default function Footer(props) {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const handleLangChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  useEffect(() => {
    const updateLang = () => setSelectedLang(i18n.language);

    i18n.on('languageChanged', updateLang);

    return () => {
      i18n.off('languageChanged', updateLang);
    };
  }, [i18n]);

  return (
    <div className={style.footer}>
      <p>4 rue Gambetta 06560 Valbonne - E. cote-design06@orange.fr - T. +33 (0)6 09 27 60 15</p>
      <p>Retrouvez-nous sur </p>
      <div>
        <select onChange={handleLangChange} value={selectedLang}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
      <p>{t('footer.text')}</p>
    </div>
  );
}
