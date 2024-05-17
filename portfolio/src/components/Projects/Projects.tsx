import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  source?: string;
  technology: string[];
}

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div className="col-span-6 p-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
        {project.name}
      </h3>
      <p>{project.description}</p>
      <p className="mt-2 text-sm">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareArrowUpRight} size="xl" />{" "}
          {project.url}
        </a>
      </p>
      {project.source ? <p className="text-sm">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGitSquare} size="xl" />{" "}
          {project.source}
        </a>
      </p> : null}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technology.map((technology) => (
          <p
            key={`${project.name}_${technology}`}
            className="project-technology text-sm p-1 rounded font-semibold"
          >
            {technology}
          </p>
        ))}
      </div>
    </div>
  );
};

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
        {projects ? projects.map((project: Project, index) => (
          <div key={project.name} className="project grid grid-cols-12 rounded">
            {index % 2 === 0
              ? [
                <img src={project.image} className="col-span-6" />,
                <ProjectDetails project={project} />,
              ]
              : [
                <ProjectDetails project={project} />,
                <img src={project.image} className="col-span-6" />,
              ]}
          </div>
        )) : <p>Looks like there is no projects here.</p>}
      </div>
    </div>
  );
}
