import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import projectsData from '../../datas/projects.json';
import styles from './Projects.module.css';


export default function ProjectDetails({ project }) {
  const [showMedia, setShowMedia] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  // Animation pour afficher les médias du projet
  const mediaAnimation = useSpring({
    opacity: showMedia ? 1 : 0,
    maxHeight: showMedia ? '100000px' : '0px',
    from: { opacity: 0, maxHeight: '0px' },
  });

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
          <p className={styles.description}>{project.description}</p>
          <p className={styles.location}>{project.location}</p>
          <p className={styles.date}>{project.date}</p>
          <button className={styles.showMediaButton} onClick={() => setShowMedia(!showMedia)}>
            {showMedia ? 'Cacher les médias' : 'Afficher les médias'}
          </button>
        </div>
      <animated.div style={mediaAnimation} className={styles.mediaContainer}>
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
      </animated.div>
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
