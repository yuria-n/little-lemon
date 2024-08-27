import { render, screen } from "@testing-library/react";

import { App } from "./App";

function MockComponent({ id }) {
  return <div data-testid={id} />;
}

jest.mock("./components/Header", () => ({
  Header: () => <MockComponent id="mock-header" />,
}));
jest.mock("./components/Footer", () => ({
  Footer: () => <MockComponent id="mock-footer" />,
}));
jest.mock("./components/contents/Home", () => ({
  Home: () => <MockComponent id="mock-content-home" />,
}));

describe("App Component", () => {
  test("renders Home component on default route", () => {
    render(<App />);
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
    expect(screen.getByTestId("mock-content-home")).toBeInTheDocument();
  });
});
