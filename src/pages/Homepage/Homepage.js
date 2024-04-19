import "./Homepage.scss";

import ProjectList from "../../components/ProjectList/ProjectList";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <section className="homepage">
      <Hero />
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <ProjectList />
      </section>
      <Contact />
      <Footer />
    </section>
  );
}

export default Homepage;
