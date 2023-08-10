import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './FooterProject.module.css';

export default function Footer(props) {
  const { t, i18n } = useTranslation('en');

  const handleLangChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <div className={style.footer}>
      {/* <p>4 rue Gambetta 06560 Valbonne - E. cote-design06@orange.fr - T. +33 (0)6 09 27 60 15</p> <br></br><br></br>
      <p>Retrouvez-nous sur </p> */}
      <div className={style.nbrProject}>
           <div className={style.divNumber}>
            {props.countProject}
            </div> / 
           <div className={style.divNumber}>
            {props.countProject}
            </div> 
      </div>
      <div className={style.optionLanguage}>
        <select onChange={handleLangChange} defaultValue={i18n.language}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
      {/* <p>{t('footer.text')}</p> */}
    </div>
  );
}
