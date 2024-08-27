import { render, screen } from "@testing-library/react";

import { Section } from "./Section";

describe("Section Component", () => {
  test("renders section", () => {
    render(<Section />);
    const section = screen.getByTestId("section");
    expect(section).toBeInTheDocument();
  });

  test("does not render title element when title is not provided", () => {
    render(<Section />);
    const title = screen.queryByTestId("section-title");
    expect(title).not.toBeInTheDocument();
  });

  test("renders title when provided", () => {
    const titleText = "Test Title";
    render(<Section title={titleText} />);
    const title = screen.getByTestId("section-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(titleText);
  });

  test("renders children when provided", () => {
    const childrenText = "This is a child element";
    render(
      <Section>
        <p>{childrenText}</p>
      </Section>,
    );
    const children = screen.getByText(childrenText);
    expect(children).toBeInTheDocument();
  });
});
