import { useState } from 'react';
import { data } from '../data/content';

const Experience = () => {

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section id="experience">
      <h2 className="title">Where I've Worked</h2>
      <div className="content">
        <ul className="experience-labels">
          {data.experience.map((exp, index) => {
            const isSelected = selectedItem === index;
            return (
              <li
                key={`label-exp-${index}`}
                onMouseOver={() => !isSelected && setSelectedItem(index)}
                className={isSelected ? 'selected':''}
              >
                { exp.enterprise }
              </li>
            )
          })}
        </ul>

        <ExperienceDetails
          item={data.experience[selectedItem]}
        />
      </div>
    </section>
  )
}

const ExperienceDetails = ({ item }) => {
  return (
    <div className="details">
      <p className="title">
        { item.position }
        <span className="enterprise"> @ { item.enterprise }</span>
      </p>
      <span className="date">{ item.from } - { item.until }</span>
      <ul className="goals">
        {item.goals.map((goal, index) => (
          <li key={`goal-${index}`}>
            <p>{ goal }</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience