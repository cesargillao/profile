import AndroidIcon from '../assets/icons/android.svg';
import AppleIcon from '../assets/icons/apple.svg';
import GlobalIcon from '../assets/icons/global.svg';
import GooglePlayIcon from '../assets/icons/google-play.svg';

const ProjectItem = ({ image, title, overline, description, technologies, links }) => {

  function getIcon(iconName) {
    switch (iconName) {
      case 'android':
        return AndroidIcon;

      case 'google-play':
        return GooglePlayIcon;

      case 'app-store':
        return AppleIcon;

      case 'web':
      default:
        return GlobalIcon;
    }
  }

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
              <a href={link.url} target="_blank" rel="noreferrer">
                <img title={link?.title} src={getIcon(link.icon)} alt="Link Icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ProjectItem