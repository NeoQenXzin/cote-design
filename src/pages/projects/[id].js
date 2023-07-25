import projectsData from '../../datas/projects.json';

export default function ProjectDetails({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.location}</p>
      <p>{project.date}</p>
      {project.media.map((media, index) => (
        <div key={index}>
          {media.type === 'image' ? (
            <img src={media.url} alt={`Image ${index}`} />
          ) : (
            <video src={media.url} controls />
          )}
        </div>
      ))}
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
