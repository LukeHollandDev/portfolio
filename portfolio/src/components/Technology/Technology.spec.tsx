import { render, screen } from "@testing-library/react";
import { Technology } from "./Technology";

const mockProps = [
  {
    name: "Python",
    url: "pythonurl",
    icon: "pythoniconurl",
  },
  {
    name: "Java",
    url: "javaurl",
    icon: "javaiconurl",
  },
  {
    name: "Typescript",
    url: "typescripturl",
    icon: "typescripticonurl",
  },
];

describe("Introduction", () => {
  test("renders", async () => {
    render(<Technology technologies={mockProps} />);
  });

  test("icons show with correct name and images", async () => {
    render(<Technology technologies={mockProps} />);

    screen.getAllByTestId("technology-card").forEach((card, index) => {
      expect(card).toHaveTextContent(mockProps[index].name);
      expect(card.querySelector("a")?.getAttribute("href")).toEqual(
        mockProps[index].url
      );
      expect(card.querySelector("img")?.getAttribute("src")).toEqual(
        mockProps[index].icon
      );
    });
  });
});
