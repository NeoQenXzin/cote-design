import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';
// LightGallery
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
//data
import projectsData from '../../datas/projects.json';


export default function ProjectDetails({ project }) {
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  // const handleVideoClick = () => {
  //   setIsVideoFullscreen(true);
  // };
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  const handleVideoFullscreenChange = () => {
    if (document.fullscreenElement === null) {
      setIsVideoFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleVideoFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleVideoFullscreenChange);
    };
  }, []);

  const getItems = () => {
    return project.media.map((media, index) => (
      media.type === 'image' ? (
        <a
          key={index}
          data-lg-size="1400-933" // Customize the size as needed
          className={`${"gallery-item"} `}
          //  className={`${"gallery-item"} ${styles.mediaItem}`}
          data-src={media.url}
        >
          <img
            // style={{ maxWidth: '280px' }}
            className={`${"img-responsive"} ${styles.image}`}
            //  alt={`Image ${index}`}
            src={media.url}
          />
        </a>

      ) : (
        <a
        key={index}
        data-lg-size="1400-933" // Customize the size as needed
        className={`${"gallery-item"} ${styles.mediaItem} ${styles.videoWrapper}`}
        data-video={`{"source": [{"src":"${media.url}", "type":"video/mp4"}], "attributes": {"preload": "none", "controls": true}}`}
      >
       
          {!isVideoFullscreen ? (
            <a
              key={index}
              data-lg-size="1400-933" // Customize the size as needed
              className={` ${styles.video}`}
              data-video={`{"source": [{"src":"${media.url}", "type":"application/x-mpegURL"}], "attributes": {"preload": false, "controls": true}}'`}
            >
              <video src={media.url} autoPlay loop muted playsInline className={styles.video}/>
            </a>
          ) : (

            <a
              key={index}
              data-lg-size="1400-933" // Customize the size as needed
              className={`${"media-item"} ${styles.mediaItem} ${styles.videoWrapper}`}
              data-video={`{"source": [{"src":"${media.url}", "type":"application/x-mpegURL"}], "attributes": {"preload": false, "controls": true}}'`}
            >
              <video src={media.url} autoPlay controls className={styles.videoFullscreen} />
            </a>
          )}
        </a>
      )
    ))

  };

  return (
    <div className={styles.projectDetails}>
      {/* Header  */}
      <div className={styles.header}>
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${project.backgroundImage})` }} />
      </div>
      {/* Main  */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.container}>
          <div className={styles.containerDescription}>
            <p className={styles.description}>{project.description}</p>
          </div>
          <div className={styles.containerInfos}>
            <p className={styles.location}>{project.location}</p>
            <p className={styles.date}>{project.date}</p>
          </div>
        </div>
      </div>


    
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgVideo, lgZoom, lgThumbnail]}
          elementClassNames={`${"custom-class-name"} ${styles.mediaContainer}`}
        >
          {getItems()}
        </LightGallery>
      
      {/* Navigation */}
      <div className={styles.navigation}>
        <Link href="/projects">
          <svg
            className={`${styles.arrowIcon} ${styles.leftArrow}`}
            fill="#625b5b"
            height="212px"
            width="212px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.21 476.21"
            xmlSpace="preserve"
            stroke="#625b5b"
            strokeWidth="0.004762130000000001"
          >
            <polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"></polygon>
          </svg>
          Voir nos autres réalisations
        </Link>
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg
            className={`${styles.arrowIcon} ${styles.upwardArrow}`}
            fill="#625b5b"
            height="212px"
            width="212px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.21 476.21"
            xmlSpace="preserve"
            stroke="#625b5b"
            strokeWidth="0.004762130000000001"
            transform="rotate(270)matrix(-1, 0, 0, -1, 0, 0)"
          >
            <polygon points="476.213,223.107 76.212,223.107 76.212,161.893 0,238.108 76.212,314.32 76.212,253.107 476.213,253.107"></polygon>
          </svg>

          Remonter en haut
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projectsData.projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectId = parseInt(params.id);
  const project = projectsData.projects.find((p) => p.id === projectId);

  return { props: { project } };
}
