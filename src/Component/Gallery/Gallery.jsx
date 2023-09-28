import React from "react";
import styles from "./Gallery.module.css";
import { useRouter } from "next/router";
import projectsData from "../../datas/projects.json";

export default function Gallery() {
  const router = useRouter();
  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  const visibleProjects = projectsData.projects.slice(0, 6);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryRow}>
        <div className={`${styles.galleryItem} ${styles.row2_3}`} onClick={() => handleProjectClick(visibleProjects[0].id)}>
        <video autoPlay loop muted className={styles.video} src={visibleProjects[0].thumbnail} alt={`Image ${visibleProjects[0].id}`} />
          {/* <img src={visibleProjects[0].thumbnail} alt={`Image ${visibleProjects[0].id}`} /> */}
          <div className={styles.overlay}>
            <h3>{visibleProjects[0].title}</h3>
            <p>{visibleProjects[0].category}</p>
          </div>
        </div>
        <div className={`${styles.galleryItem} ${styles.row1_3}`} onClick={() => handleProjectClick(visibleProjects[1].id)}>
          <img src={visibleProjects[1].thumbnail} alt={`Image ${visibleProjects[1].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[1].title}</h3>
            <p>{visibleProjects[1].category}</p>
          </div>
        </div>
      </div>

      <div className={styles.galleryRow}>
        <div className={`${styles.galleryItem} ${styles.row1_3}`} onClick={() => handleProjectClick(visibleProjects[2].id)}>
          <img src={visibleProjects[2].thumbnail} alt={`Image ${visibleProjects[2].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[2].title}</h3>
            <p>{visibleProjects[2].category}</p>
          </div>
        </div>
        <div className={`${styles.galleryItem} ${styles.row2_3}`} onClick={() => handleProjectClick(visibleProjects[3].id)}>
          <img src={visibleProjects[3].thumbnail} alt={`Image ${visibleProjects[3].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[3].title}</h3>
            <p>{visibleProjects[3].category}</p>
          </div>
        </div>
      </div>

      <div className={styles.galleryRow}>
        <div className={`${styles.galleryItem} ${styles.row2_3}`} onClick={() => handleProjectClick(visibleProjects[4].id)}>
          <img src={visibleProjects[4].thumbnail} alt={`Image ${visibleProjects[4].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[4].title}</h3>
            <p>{visibleProjects[4].category}</p>
          </div>
        </div>
        <div className={`${styles.galleryItem} ${styles.row1_3}`} onClick={() => handleProjectClick(visibleProjects[5].id)}>
          <img src={visibleProjects[5].thumbnail} alt={`Image ${visibleProjects[5].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[5].title}</h3>
            <p>{visibleProjects[5].category}</p>
          </div>
        </div>
      </div>
{/* 
      <div className={styles.galleryRow}>
        <div className={`${styles.galleryItem} ${styles.row1_3}`} onClick={() => handleProjectClick(visibleProjects[6].id)}>
          <img src={visibleProjects[6].thumbnail} alt={`Image ${visibleProjects[6].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[6].title}</h3>
            <p>{visibleProjects[6].category}</p>
          </div>
        </div>
        <div className={`${styles.galleryItem} ${styles.row2_3}`} onClick={() => handleProjectClick(visibleProjects[7].id)}>
          <img src={visibleProjects[7].thumbnail} alt={`Image ${visibleProjects[7].id}`} />
          <div className={styles.overlay}>
            <h3>{visibleProjects[7].title}</h3>
            <p>{visibleProjects[7].category}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
