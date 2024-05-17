import { render, screen } from "@testing-library/react";
import { Project, Projects } from "./Projects";

const mockProjects: Project[] = [
  {
    name: "project_one",
    description: "project_one_description",
    image: "project_one_image",
    url: "project_one_url",
    source: "project_one_source_url",
    technology: ["React"]
  },
  {
    name: "project_two",
    description: "project_two_description",
    image: "project_two_image",
    url: "project_two_url",
    technology: ["Angular"]
  }
];

describe("Projects", () => {
  test("renders", async () => {
    render(<Projects projects={mockProjects} />);
  });

  test("correct project details", async () => {
    render(<Projects projects={mockProjects} />);

    mockProjects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();

      const urlLink = screen.getByRole('link', { name: new RegExp(project.url, 'i') });
      expect(urlLink).toHaveAttribute('href', project.url);

      if (project.source) {
        const sourceLink = screen.getByRole('link', { name: new RegExp(project.source, 'i') });
        expect(sourceLink).toHaveAttribute('href', project.source);
      }

      project.technology.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });
});
