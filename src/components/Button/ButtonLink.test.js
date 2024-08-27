import { render, screen } from "@testing-library/react";

import { ButtonLink } from "./ButtonLink";
import { sizeMap, variantMap } from "../../constants";

jest.mock("wouter", () => ({
  Link: ({ children, className, ...props }) => (
    <a className={className} {...props}>
      {children}
    </a>
  ),
}));

describe("ButtonLink Component", () => {
  test("renders ButtonLink", () => {
    render(<ButtonLink />);
    const link = screen.getByTestId("button-link");
    expect(link).toBeInTheDocument();
  });

  test("applies variant class when provided", () => {
    const variant = variantMap.primary;
    render(<ButtonLink variant={variant} />);
    const link = screen.getByTestId("button-link");
    expect(link).toHaveClass(variant);
  });

  test("applies size class when provided", () => {
    const size = sizeMap.sm;
    render(<ButtonLink size={size} />);
    const link = screen.getByTestId("button-link");
    expect(link).toHaveClass(size);
  });

  test("renders with correct href attribute", () => {
    const href = "/test-path";
    render(<ButtonLink href={href} />);
    const link = screen.getByTestId("button-link");
    expect(link).toHaveAttribute("href", href);
  });

  test("does not apply unknown variant or size classes", () => {
    const unknown = "unknown";
    render(<ButtonLink variant={unknown} size={unknown} />);
    const link = screen.getByTestId("button-link");
    expect(link).not.toHaveClass(unknown);
  });
});
