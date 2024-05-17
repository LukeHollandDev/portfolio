import { render, screen } from "@testing-library/react";
import { Social, SocialProps } from "./Social";

const mockProps: SocialProps = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Letterboxd: "letterboxd",
  YouTube: "youtube",
  Email: "email",
};

describe("Social", () => {
  test("renders", async () => {
    render(<Social {...mockProps} />);
  });

  test("all the links are as expected", async () => {
    render(<Social {...mockProps} />);
    const anchors = screen.getAllByRole("link");
    Object.values(mockProps).forEach((url, index) =>
      expect(anchors[index]).toHaveAttribute("href", url)
    );
  });

  test("all the links are external", async () => {
    render(<Social {...mockProps} />);
    const anchors = screen.getAllByRole("link");
    anchors.forEach((anchor) =>
      expect(anchor).toHaveAttribute("target", "_blank")
    );
  });

  test("correct icons are being rendered", async () => {
    const { container } = render(<Social {...mockProps} />);

    const linkedInSvg = container.querySelector(
      "[data-icon='linkedin']"
    ) as HTMLImageElement;
    expect(linkedInSvg.classList.toString()).toContain("fa-linkedin");

    const gitHubSvg = container.querySelector(
      "[data-icon='square-github']"
    ) as HTMLImageElement;
    expect(gitHubSvg.classList.toString()).toContain("fa-square-github");

    const letterboxdSvg = container.querySelector(
      "[data-icon='square-letterboxd']"
    ) as HTMLImageElement;
    expect(letterboxdSvg.classList.toString()).toContain(
      "fa-square-letterboxd"
    );

    const youTubeSvg = container.querySelector(
      "[data-icon='square-youtube']"
    ) as HTMLImageElement;
    expect(youTubeSvg.classList.toString()).toContain("fa-square-youtube");

    const emailSvg = container.querySelector(
      "[data-icon='square-envelope']"
    ) as HTMLImageElement;
    expect(emailSvg.classList.toString()).toContain("fa-square-envelope");
  });
});
