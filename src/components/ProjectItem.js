const ProjectItem = ({ image, title, overline, description, technologies, links }) => {
  return (
    <li className="project">
      <div className="project-image">
        <img src={ image } alt="Project" />
      </div>
      <div className="project-content">
        <p className="project-overline">{ overline }</p>
        <h3 className="project-title">{ title }</h3>
        <div className="project-description">
          <p>{ description }</p>
        </div>
        <ul className="project-tech-list">
          {technologies.map((tech, index) => (
            <li key={`tech-${index}`}>{ tech }</li>
          ))}
        </ul>
        <ul className="project-link-list">
          {links.map((link, index) => (
            <li key={`link-${index}`}>
              <a href={link.url}>
                { link.icon }
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ProjectItem