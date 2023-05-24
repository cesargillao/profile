const ProjectItem = () => {
  return (
    <li className="project">
      <div className="project-image">
        <img src="http://placeimg.com/640/480/food" alt="" />
      </div>
      <div className="project-content">
        <p className="project-overline">Featured Project</p>
        <h3 className="project-title">Halcyon Theme</h3>
        <div className="project-description">
          <p>Veniam excepteur Lorem consectetur ipsum dolore ullamco. Sunt eu aliquip ullamco minim exercitation tempor eiusmod laborum magna nostrud eiusmod nulla.</p>
        </div>
        <ul className="project-tech-list">
          <li>VS Code</li>
          <li>Sublime</li>
          <li>Atom</li>
          <li>ITerm2</li>
          <li>Hyper</li>
        </ul>
      </div>
    </li>
  );
}

export default ProjectItem