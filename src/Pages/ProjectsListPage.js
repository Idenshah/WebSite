import projects from "./Project-content";
import ProjectList from "../components/ProjectList";

const ProjectsListPage = () => {
  return (
    <>
      <div className="projectListpage">
        <h1>Projects</h1>
        <ProjectList projects={projects}></ProjectList>
      </div>
    </>
  );
};

export default ProjectsListPage;
