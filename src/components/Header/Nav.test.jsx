import { render, screen } from "@testing-library/react";

import { MockComponent } from "../../setupTests";
import { links, routePath } from "../../constants";
import { Nav } from "./Nav";

jest.mock("../Button", () => ({
  ButtonLink: (props) => (
    <MockComponent {...props} data-testid="mock-button-link" />
  ),
}));

jest.mock("wouter", () => ({
  useLocation: jest.fn(),
}));

describe("Nav Component", () => {
  const mockUseLocation = require("wouter").useLocation;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders navigation links correctly", () => {
    mockUseLocation.mockReturnValue(routePath.home);
    render(<Nav />);
    const navItems = screen.getAllByTestId("nav-item");
    expect(navItems.length).toBe(links.length);
  });
});
