import "./Technology.css";

export interface TechnologyItem {
  name: string;
  url: string;
  icon: string;
}

export function TechnologyIcon({ technology }: { technology: TechnologyItem }) {
  return (
    <div
      className="technology-card col-span-2 sm:col-span-1 p-2 rounded hover:scale-110 ease-in duration-150"
      data-testid="technology-card"
    >
      <a href={technology.url} target="_blank" rel="noopener noreferrer">
        <img
          src={technology.icon}
          alt={`${technology.name} Icon`}
          title={`${technology.name}`}
        />
        <p className="text-xs sm:text-sm text-center mt-2">{technology.name}</p>
      </a>
    </div>
  );
}

export function Technology({
  technologies,
}: {
  technologies: TechnologyItem[];
}) {
  if (!technologies) {
    return <div>No technologies...</div>;
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Technologies
      </h2>
      <p>
        The following technologies are ones I am familiar with and have used
        professionally and in my personal projects.
      </p>
      <p className="text-sm italic">
        Thank you to{" "}
        <a
          className="link"
          href="https://devicon.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devicon
        </a>{" "}
        for the icons!
      </p>
      <div className="grid grid-cols-10 gap-1 mt-4">
        {technologies.map((technology: TechnologyItem) => (
          <TechnologyIcon key={technology.name} technology={technology} />
        ))}
      </div>
    </div>
  );
}
