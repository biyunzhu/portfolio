import "./Homepage.scss";
import headshot from "../../assests/images/headshot.jpg";
import ProjectList from "../../components/ProjectList/ProjectList";

function Homepage() {
  return (
    <section className="homepage">
      <section className="hero">
        <div className="hero__text">
          <h1>
            Hi, I'm Biyun Zhu.
            <br />
            I'm a website designer and developer.
          </h1>
          <p>
            I value clarity, empathy, and integrity above all else. These ideals
            guide my approach to problem solving and life in general.
          </p>
        </div>
        <img className="hero__image" src={headshot} alt="headshot" />
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <ProjectList />
      </section>
    </section>
  );
}

export default Homepage;
