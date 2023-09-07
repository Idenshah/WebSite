import { Link } from "react-router-dom";
const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Link
          key={project.name}
          class="article-list-item"
          to={`/projects/${project.name}`}
        >
          <h3>{project.title}</h3>
          <p>{project.content[0].substring(0, 150) + "..."}</p>
        </Link>
      ))}
    </>
  );
};

export default ProjectList;
