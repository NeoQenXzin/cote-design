import React from 'react'
import styles from '../styles/Agence.module.css'
import { useTranslation } from 'react-i18next';

export default function agence() {
  return (
    <main className={styles.main}>

      <section className={styles.sectionMainTitle}>
        <div className={styles.mainTitleBackground}></div>

        <h1 className={styles.mainTitle}>Bla bla bla power title</h1>
      </section>

      <section className={styles.sectionPresentation}>
        <div className={styles.prezContainer}>
          <div className={styles.prezTitle}><h3>Qui sommes nous?</h3></div>
          <div className={styles.prezContent}>

            Située au cœur du village historique de Valbonne, l'agence d'architecture d'intérieur Cote Design est spécialisée dans la conception, la transformation et la rénovation d'espaces intérieurs et extérieurs.

            Brigitte Carteret a fait ses débuts dans l'univers du prêt à porter où elle a développé sa sensibilité aux matières et aux couleurs. Depuis 1989, elle met toute sa passion et son expérience professionnelle au service de ses clients. Dotée d'une maitrise d'œuvre, elle accompagne chaque projet de la conception jusqu'à la réalisation.
          </div>
        </div>

        <div className={styles.philosophyContainer}>

          <div className={styles.philosophyTitle}><h3>Notre Philosophie</h3></div>
          <div className={styles.philosophyContent}>
            L'écoute et la compréhension des besoins de chaque client est au centre de notre réflexion et chaque projet est une vraie rencontre. Tout notre travail consiste à allier le beau et l'utile, la créativité et la technique. C'est pourquoi au delà de notre concept nous étudions la faisabilité de chaque projet jusque dans les moindres détails afin de se démêler des contraintes et de mettre la technique au service de l'esthétique.

            Remodeler les volumes, moderniser les espaces, redessiner les lignes et jouer avec la lumière, harmoniser les couleurs et les matières... Du gros œuvre aux finitions nous redonnons vie aux lieux en privilégiant le bien être des occupants dans une ambiance intemporelle.
          </div>
        </div>
      </section>

      <div className={styles.presentation}>
  <h2>À Propos de Coté Design</h2>
  <p>
    Chez Coté Design, nous sommes animés par des valeurs fondamentales qui guident notre démarche et définissent notre identité.
  </p>

  <div className={styles.philosophytitle}>Nos Principes Directeurs</div>
  <div className={styles.philosophycontent}>
    <p>
      <strong>Créativité Innovante:</strong> Chez Coté Design, chaque projet est une toile vierge où la créativité s'épanouit. Nous nous engageons à apporter des idées innovantes, repoussant constamment les limites du design et de la fonctionnalité.
    </p>
    <p>
      <strong>Dévouement à l'Excellence:</strong> Nous sommes dévoués à offrir un travail d'une qualité exceptionnelle. Chaque détail compte, de la conception initiale à la réalisation finale, assurant ainsi la satisfaction et la confiance de nos clients.
    </p>
    <p>
      <strong>Respect de l'Environnement:</strong> Coté Design s'engage à intégrer des pratiques respectueuses de l'environnement dans chaque étape de nos projets. Nous explorons constamment des solutions durables et éco-responsables.
    </p>
    <p>
      <strong>Collaboration Transparente:</strong> La collaboration ouverte et transparente est au cœur de notre approche. Nous travaillons en étroite collaboration avec nos clients, les consultant à chaque étape du processus pour garantir une satisfaction totale.
    </p>
    <p>
      <strong>Innovation Technologique:</strong> À l'avant-garde de l'innovation, nous embrassons les dernières avancées technologiques. Cela se traduit par des solutions modernes et efficaces qui répondent aux besoins actuels et futurs.
    </p>
  </div>
</div>

    </main>
  )
}
