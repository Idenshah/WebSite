import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import projects from "./Project-content";

const ProjectPage = () => {
  //const params = useParams();
  //const projectId = params.articleId;
  const { projectId } = useParams();
  const project = projects.find((project) => project.name === projectId);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{project.title}</h1>
      {project.content.map((paragraph, i) => (
        <p key={i} className="paragraph">
          {paragraph}
        </p>
      ))}
      <p>{project.link}</p>
    </>
  );
};

export default ProjectPage;
