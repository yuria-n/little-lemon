import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";
import { sizeMap, variantMap } from "../../constants";

describe("Button Component", () => {
  test("renders button", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  test("applies variant class when provided", () => {
    const variant = variantMap.primary;
    render(<Button variant={variant} />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(variant);
  });

  test("applies size class when provided", () => {
    const size = sizeMap.sm;
    render(<Button size={size} />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass(size);
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    const button = screen.getByTestId("button");
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not apply unknown variant or size classes", () => {
    const unknown = "unknown";
    render(<Button variant={unknown} size={unknown} />);
    const button = screen.getByTestId("button");
    expect(button).not.toHaveClass(unknown);
  });
});
