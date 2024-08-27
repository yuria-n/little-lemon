import { render, screen } from "@testing-library/react";

import { MockComponent } from "../../setupTests";
import { routePath } from "../../constants";
import { Header } from "./Header";

jest.mock("./Nav", () => ({
  Nav: () => <MockComponent data-testid="mock-nav" />,
}));

jest.mock("wouter", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe("Header Component", () => {
  test("renders header", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders logo with correct link to home", () => {
    render(<Header />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo.svg"));
    const link = screen.getByRole("link", { name: /go to home/i });
    expect(link).toHaveAttribute("href", routePath.home);
  });

  test("renders Nav component", () => {
    render(<Header />);
    const nav = screen.getByTestId("mock-nav");
    expect(nav).toBeInTheDocument();
  });
});
