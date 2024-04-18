import "./ProjectList.scss";
import Project from "../Project/Project";
import DesignProjects from "../../data/DesignProjects.json";

function ProjectList() {
  return (
    <section className="project-list">
      {DesignProjects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </section>
  );
}

export default ProjectList;
