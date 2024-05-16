import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import { SocialProps } from "../Social/Social";

const mockSocialProp: SocialProps = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Letterboxd: "letterboxd",
  YouTube: "youtube",
  Email: "email",
};

describe("Social", () => {
  test("renders", async () => {
    render(<Banner socialData={mockSocialProp} />);
  });

  test("has correct heading and subtext", async () => {
    render(<Banner socialData={mockSocialProp} />);

    const nameHeading = screen.getByRole("heading", { level: 1 });
    expect(nameHeading).toHaveTextContent("Luke Holland");

    const subtextParagraph = screen.getByRole("paragraph");
    expect(subtextParagraph).toHaveTextContent("Software Engineer");
  });
});
