import { render } from "@testing-library/react";
import { Technology } from "./Technoloy";

const mockProps = [
  {
    name: "Python",
    url: "pythonurl",
    icon: "pythoniconurl",
  },
];

describe("Introduction", () => {
  test("renders", async () => {
    render(<Technology technologies={mockProps} />);
  });
});
