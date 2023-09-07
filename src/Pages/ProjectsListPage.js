import projects from "./Project-content";
import ProjectList from "../components/ProjectList";

const ProjectsListPage = () => {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects}></ProjectList>
    </>
  );
};

export default ProjectsListPage;
