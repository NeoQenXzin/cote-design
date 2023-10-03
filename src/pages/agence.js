import React from 'react'
import styles from '../styles/Agence.module.css'
import Carousel from '../Component/Carousel/Carousel'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import valueExel from '../../public/assets/ressources/agence-value-exel.jpg'
import valueCrea from '../../public/assets/ressources/agence-value-crea.jpg'
import valueEco from '../../public/assets/ressources/agence-value-nature.jpg'
import valueTeam from '../../public/assets/ressources/agence-value-team.jpg'
import valueInnov from '../../public/assets/ressources/agence-value-inov.jpg'

export default function agence() {

  const { t } = useTranslation();


  const testimonials = [
    { id: 1, content: "Super équipe, à l'écoute et très professionnelle. Nous adorons la maison, merci beaucoup pour votre travail." },
    { id: 2, content: 'Très bon service, merci pour votre travail.' },
    { id: 3, content: "Super équipe, à l'écoute et très professionnelle" },
    // Ajoutez d'autres avis au besoin
  ];

  return (
    <main className={styles.main}>

      <section className={styles.sectionMainTitle}>
        <div className={styles.mainTitleBackground}></div>

        <h1 className={styles.mainTitle}>" &nbsp;{t("agence.mainTitle")} &nbsp;"</h1>
      </section>

      <section className={styles.sectionPresentation}>
        <div className={styles.prezContainer}>
          <div className={styles.prezTitle}><h3>{t("agence.prezTitle")}</h3></div>
          <div className={styles.prezContent}>
            {t("agence.prezContent").split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className={styles.philosophyContainer}>

          <div className={styles.philosophyContent}>
            {t("agence.philosophyContent").split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className={styles.philosophyTitle}><h3>{t("agence.philosophyTitle")}</h3></div>
        </div>
      </section>

      <div className={styles.sectionPrincipes}>
        <h2>Nos Principes Directeurs</h2>
        {/* <p>
          Chez Coté Design, nous sommes animés par des valeurs fondamentales qui guident notre démarche et définissent notre identité.
        </p> */}


        <div className={`${styles.valueContainer} ${styles.valueContainerResp1}`}>
          <div className={`${styles.imageContainer} ${styles.imgValueContainer1}`}> 
          <Image className={styles.imageContainerImg} src={valueExel}/>
          </div>
          <div className={`${styles.textValueContainer1} ${styles.textValue}`}>
            <h3>Créativité Innovante:</h3>
            <p>
              Chez Coté Design, chaque projet est une toile vierge où la créativité s'épanouit. Nous nous engageons à apporter des idées innovantes, repoussant constamment les limites du design et de la fonctionnalité.
            </p>
          </div>
        </div>
        <div className={`${styles.valueContainer} ${styles.valueContainerResp2}`}>
          <div className={styles.textValueContainer2}>
            <h3>Dévouement à l'Excellence:</h3>
            <p>
              Nous sommes dévoués à offrir un travail d'une qualité exceptionnelle. Chaque détail compte, de la conception initiale à la réalisation finale, assurant ainsi la satisfaction et la confiance de nos clients.
            </p>
          </div>
          <div className={`${styles.imageContainer} ${styles.imgValueContainer2}`}>
          <Image className={styles.imageContainerImg} src={valueCrea}/>
          </div>
        </div>
        <div className={`${styles.valueContainer} ${styles.valueContainerResp3}`}>
          <div className={`${styles.imageContainer} ${styles.imgValueContainer3}`}>
          <Image className={styles.imageContainerImg} src={valueEco}/>
          </div>
          <div className={styles.textValueContainer3}>
            <h3>Respect de l'Environnement:</h3>
            <p>
              Coté Design s'engage à intégrer des pratiques respectueuses de l'environnement dans chaque étape de nos projets. Nous explorons constamment des solutions durables et éco-responsables.
            </p>
          </div>
        </div>
        <div className={`${styles.valueContainer} ${styles.valueContainerResp4}`}>
          <div className={styles.textValueContainer4}>
            <h3>Collaboration Transparente:</h3>
            <p>
              La collaboration ouverte et transparente est au cœur de notre approche. Nous travaillons en étroite collaboration avec nos clients, les consultant à chaque étape du processus pour garantir une satisfaction totale.
            </p>
          </div>
          <div className={`${styles.imageContainer} ${styles.imgValueContainer4}`}>
          <Image className={styles.imageContainerImg} src={valueTeam}/>
          </div>
        </div>
        <div className={`${styles.valueContainer} ${styles.valueContainerResp5}`}>
          <div className={`${styles.imageContainer} ${styles.imgValueContainer5}`}>
          <Image className={styles.imageContainerImg} src={valueInnov}/>
          </div>
          <div className={styles.textValueContainer5}>
            <h3>Innovation Technologique:</h3>
            <p>
              À l'avant-garde de l'innovation, nous embrassons les dernières avancées technologiques. Cela se traduit par des solutions modernes et efficaces qui répondent aux besoins actuels et futurs.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.sectionCarousel}>
        <h2>Témoignages</h2>
        <Carousel testimonials={testimonials} />
      </section>
    </main>
  )
}
