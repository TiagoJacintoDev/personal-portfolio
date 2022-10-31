import { projectsData } from "../data/projectsData";
import { FaLaptop } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  return (
    <section className="section-project | container" id="projects">
      <h2 className="section-title">Projects</h2>
      {projectsData.map((project) => (
        <div className="project">
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            <div className="project-skills">
              {project.skills.map((skill) => (
                <div className="project-skill paragraph">
                  {skill.img} {skill.text}
                </div>
              ))}
            </div>
            <p className="paragraph">{project.description}</p>
            <div>
              <button style={{ marginRight: "15px" }} className="button">
                <a
                  href={project.demoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <FaLaptop />
                </a>
              </button>
              <button className="button" data-inverted>
                <a
                  href={project.codeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <SiGithub />
                </a>
              </button>
            </div>
          </div>

          <img src={project.img} className="project-image" />
        </div>
      ))}
    </section>
  );
}
