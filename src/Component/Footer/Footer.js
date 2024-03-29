import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Import de l'icône Instagram
import style from './Footer.module.css';
import Image from 'next/image';
import LogoLight from 'public/assets/logos/logoLight.png'
import Link from 'next/link';

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
      <div className="">
        <Image src={LogoLight} className={style.logoFooter} alt="Logo" />
      </div>
      <div className={style.footerTop}>

        <Link href={'/contact'}>Contact</Link> - Mention Légales - FAQ

        <p>
          <div className={style.socialMedia}>
            <a href="https://www.facebook.com/CoteDesign.BrigitteCarteret/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/cotedesign06/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/votrecompte" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>

        </p>
        <p className={style.copyright}>{t('footer.text')}</p>
      </div>

      <div className={style.langSelector}>
        <select onChange={handleLangChange} value={selectedLang}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </div>
  );
}
