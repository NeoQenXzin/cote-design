import React from "react";
import styles from "./Projects.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import projectsData from "../../datas/projects.json";
import NavbarProjects from "../../Component/NavbarProject/NavbarProjects"
import FooterProject from "../../Component/FooterProject/FooterProject"

export default function Projects() {
  const router = useRouter();
  const [nbreProject, setNbreProject] = useState(0);

  useEffect(() => {
    setNbreProject(projectsData.projects.length);
  }, []); // UseEffect will run once after the initial render

  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <>
      <NavbarProjects />
      <div className={styles.globalContainer}>
        {/* <h1>Nos Projets</h1> */}
        <div className={styles.projectsContainer}>
          {/* <p>Explorez notre portfolio diversifié de projets de design d'intérieur.</p> */}
          <div className={`${styles.projectsGrid} ${styles.galleryGrid}`}>
            {projectsData.projects.map((project, index) => {
              console.log(project);
              return (
                <div
                  key={project.id}
                  className={`${styles.projectCard} ${index % 2 === 0 ? styles.evenCard : styles.oddCard
                    }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className={styles.projectImageContainer}>
                    {!project.thumbnail.endsWith('.mp4') ? (
                      <img src={project.thumbnail} alt={`Projet ${project.title}`} />

                    ) : (
                      <div className={styles.videoWrapper}>
                        <video autoPlay loop muted className={styles.video} src={project.thumbnail} alt={`Video ${project.id}`} />
                      </div>
                    )}
                  </div>
                  <div className={styles.projectInfo}>
                    <h2>{project.title}</h2>
                    <p>{project.category}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <FooterProject  countProject={nbreProject}/>
      </div>
    </>
  );
}
