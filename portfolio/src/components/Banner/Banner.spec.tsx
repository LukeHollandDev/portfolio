import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Social", () => {
  test("renders", async () => {
    render(<Banner />);
  });

  test("has correct heading and subtext", async () => {
    render(<Banner />);

    const nameHeading = screen.getByRole("heading", { level: 1 });
    expect(nameHeading).toHaveTextContent("Luke Holland");

    const subtextParagraph = screen.getByRole("paragraph");
    expect(subtextParagraph).toHaveTextContent("Software Engineer");
  });
});
