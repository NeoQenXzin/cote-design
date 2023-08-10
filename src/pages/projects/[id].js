import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import projectsData from '../../datas/projects.json';
import styles from './Projects.module.css';
import Link from 'next/link';

export default function ProjectDetails({ project }) {
  const [showMedia, setShowMedia] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  // Animation pour afficher les médias du projet
  // const mediaAnimation = useSpring({
  //   opacity: showMedia ? 1 : 1,
  //   maxHeight: showMedia ? '100000px' : '0px',
  //   from: { opacity: 0, maxHeight: '0px' },
  // });

  // Afficher la lightbox
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (url) => {
    setSelectedImage(url);
  };
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Gestion du clic sur la vidéo pour mettre en plein écran
  const handleVideoClick = () => {
    setIsVideoFullscreen(true);
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
      {/* <button className={styles.showMediaButton} onClick={() => setShowMedia(!showMedia)}>
        {showMedia ? 'Cacher les médias' : 'Afficher les médias'}
      </button> */}
      {/* <animated.div style={mediaAnimation} className={styles.mediaContainer}> */}
      {/* <div style={mediaAnimation} className={styles.mediaContainer}> */}
      <div className={styles.mediaContainer}>
        {project.media.map((media, index) => (
          <div key={index} className={styles.mediaItem}>
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={`Image ${index}`}
                onClick={() => handleImageClick(media.url)}
                className={styles.image}
              />
            ) : (
              <div className={styles.videoWrapper} onClick={handleVideoClick}>
                {!isVideoFullscreen ? (
                  <video src={media.url} autoPlay loop muted playsInline className={styles.video} />
                ) : (
                  <video src={media.url} autoPlay controls className={styles.videoFullscreen} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* </animated.div> */}
      {selectedImage && (
        <div className={styles.lightbox}>
          <div className={styles.lightboxContent}>
            <span className={styles.closeButton} onClick={closeLightbox}>
              &times;
            </span>
            <img src={selectedImage} alt="Lightbox" />
          </div>
        </div>
      )}
      {/* <div className={styles.navigation}>
        <Link href="/projects">Voir nos autres réalisations</Link>
      </div> */}
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
//       <animated.div style={mediaAnimation} className={styles.mediaContainer}>
//         {project.media.map((media, index) => (
//           <div key={index} className={styles.mediaItem}>
//             {media.type === 'image' ? (
//               <img
//                 src={media.url}
//                 alt={`Image ${index}`}
//                 onClick={() => handleImageClick(media.url)}
//                 className={styles.image}
//               />
//             ) : (
//               <div className={styles.videoWrapper} onClick={handleVideoClick}>
//                 {!isVideoFullscreen ? (
//                   <video src={media.url} autoPlay loop muted playsInline className={styles.video} />
//                 ) : (
//                   <video src={media.url} autoPlay controls className={styles.videoFullscreen} />
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </animated.div>
//       {selectedImage && (
//         <div className={styles.lightbox}>
//           <div className={styles.lightboxContent}>
//             <span className={styles.closeButton} onClick={closeLightbox}>
//               &times;
//             </span>
//             <img src={selectedImage} alt="Lightbox" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const paths = projectsData.projects.map((project) => ({
//     params: { id: project.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const projectId = parseInt(params.id);
//   const project = projectsData.projects.find((p) => p.id === projectId);

//   return { props: { project } };
// }
