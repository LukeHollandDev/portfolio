import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  source?: string;
  technology: string[];
}

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Projects</h2>
      <p>
        The following is a curated list of my projects, showing off the projects
        I am most proud of!
      </p>
      <p className="text-sm italic">
        Checkout my{" "}
        <a
          className="link"
          href="https://github.com/LukeHollandDev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        to see all of my open source projects!
      </p>
      <div className="mt-4">
        {projects.map((project: Project) => (
          <div className="project grid grid-cols-12 rounded">
            <img src={project.image} className="col-span-6" />
            <div className="col-span-6 p-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {project.name}
              </h3>
              <p>{project.description}</p>
              <p className="mt-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSquareArrowUpRight} size="xl" />{" "}
                  {project.url}
                </a>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technology.map((technology) => (
                  <p className="project-technology p-1 rounded font-semibold">
                    {technology}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
