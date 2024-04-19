import "./ProjectList.scss";
import Project from "../Project/Project";
// import DesignProjects from "../../data/DesignProjects.json";

function ProjectList({ projects, updateActiveDesign }) {
  // const handleClick = () => {
  //   // updateActiveDesign(index);
  //   console.log("clicked");
  // };
  return (
    <section className="project-list">
      {projects.map((project, index) => (
        <Project
          project={project}
          index={index}
          key={index}
          // onClick={handleClick}
          // updateActiveDesign={updateActiveDesign}
        />
      ))}
    </section>
  );
}

export default ProjectList;
