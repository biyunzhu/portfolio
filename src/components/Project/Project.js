import "./Project.scss";
import { Link } from "react-router-dom";

function Project({ project, index }) {
  const { title, tags, cover } = project;
  return (
    <Link className="project" to={`/designs/${index}`}>
      <img className="project__cover" src={cover} alt="The Prairie Garden" />
      <div className="project__info">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        <div className="project__tags">
          {tags.map((tag, index) => (
            <span className="project__tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Project;
