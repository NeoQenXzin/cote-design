import React from "react";
import styles from "../../Component/Gallery/Gallery.module.css";
import { useState } from "react";
import projectsData from "../../datas/projects.json";
import { useRouter } from "next/router";

export default function projects() {

    // Router pour générer pages dynamiques
  const router = useRouter();
  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
   
        <>
      <h2>Galerie</h2>
      <div className={styles.galleryContainer}>
        {projectsData.projects.map((project) => (
          <div
          key={project.id}
          className={styles.galleryItem}
          onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.thumbnail} alt={`Image ${project.id}`} />
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
        </>
   
  );
}
