import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("renders text", () => {
  render(<App />);
  const title = screen.getByText(/Little Lemon/i);
  expect(title).toBeInTheDocument();
});
