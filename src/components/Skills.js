import { skillsData } from '../data/skillsData';

export default function Skills() {
  const skills = skillsData.map(item => (
    <div className='skills-info'>
      <h3 className='sub-title'>{item.type}</h3>
      <div className='skills-card'>
        {item.list.map(skill => (
          <div className='skill'>
            <img src={skill.img} />
            <p className='paragraph'>{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <section className='skills | container' id='skills'>
      <h1 className='section-title'>Skills</h1>
      <div>{skills}</div>
    </section>
  );
}
