import "./Homepage.scss";

import ProjectList from "../../components/ProjectList/ProjectList";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";

function Homepage({ projects, updateActiveDesign }) {
  return (
    <section className="homepage">
      <Hero />
      <section id="projects" className="projects">
        <h2 className="projects__title">Projects</h2>
        <ProjectList
          projects={projects}
          updateActiveDesign={updateActiveDesign}
        />
      </section>
      <Contact />
    </section>
  );
}

export default Homepage;
