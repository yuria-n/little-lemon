import { render, screen } from "@testing-library/react";

import { MockComponent } from "./setupTests";
import { App } from "./App";

jest.mock("./components/Header", () => ({
  Header: () => <MockComponent data-testid="mock-header" />,
}));
jest.mock("./components/Footer", () => ({
  Footer: () => <MockComponent data-testid="mock-footer" />,
}));
jest.mock("./components/contents/Home", () => ({
  Home: () => <MockComponent data-testid="mock-content-home" />,
}));

describe("App Component", () => {
  test("renders Home component on default route", () => {
    render(<App />);
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
    expect(screen.getByTestId("mock-content-home")).toBeInTheDocument();
  });
});
