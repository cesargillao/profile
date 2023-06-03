import { data } from '../data/content';

const About = () => (
  <section id="about">
    <h2 className="title">About Me</h2>
    <div className="content">
      <p className="px-2 lg:px-0">{ data.about }</p>
      <div className="photo">
        <img src={data.profile_photo} alt="César Gil Lao" />
      </div>
    </div>
    <p className="text-gray-300 pt-4 pb-2 px-2 lg:px-0">Here are a few technologies I've been working with recently:</p>
    <div className="content px-2 lg:px-0">
      <ul className="about-skills">
        {data.skills.map((skill, index) => (
          <li key={`skill-${index}`}>{ skill }</li>
        ))}
      </ul>
      <div className="flex-[2]" />
    </div>
  </section>
);

export default About