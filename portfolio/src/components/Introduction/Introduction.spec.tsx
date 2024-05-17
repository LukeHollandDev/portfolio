import { render } from "@testing-library/react";
import Introduction from "./Introduction";

describe("Introduction", () => {
  test("renders", async () => {
    render(<Introduction />);
  });
});
