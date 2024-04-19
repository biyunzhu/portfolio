import "./Project.scss";

function Project({ project }) {
  const { title, description, tags, image, link } = project;
  return (
    <section className="project">
      <img className="project__cover" src={image} alt="The Prairie Garden" />
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
    </section>
  );
}

export default Project;
