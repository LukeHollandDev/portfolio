import { render } from "@testing-library/react";
import Footer from "./Footer";
import { SocialProps } from "../Social/Social";

const mockSocialProp: SocialProps = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Letterboxd: "letterboxd",
  YouTube: "youtube",
  Email: "email",
};

describe("Introduction", () => {
  test("renders", async () => {
    render(<Footer socialData={mockSocialProp} />);
  });
});
