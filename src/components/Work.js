import { ProjectItem } from './';
import { data } from './../data/content';

const Work = () => (
  <section id="work" className="projects">
    <h2 className="title">Some Things I've Built</h2>
    <ul>
      {data.work.map((project, index) => (
        <ProjectItem
          key={index.toString()}
          title={project.title}
          description={project.description}
          overline={project.overline}
          image={project.image}
          technologies={project.technologies}
          links={project.links}
        />
      ))}
    </ul>
  </section>
);

export default Work