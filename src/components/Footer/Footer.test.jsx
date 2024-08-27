import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";
import { links } from "../../constants";

jest.mock("wouter", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

jest.mock("../icons", () => ({
  IconFacebook: (props) => <svg {...props} />,
  IconInstagram: (props) => <svg {...props} />,
  IconLocationDot: (props) => <svg {...props} />,
  IconPhone: (props) => <svg {...props} />,
}));

describe("Footer Component", () => {
  test("renders footer", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(
      screen.getByText(/123 Main Street, City, State/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/i)).toBeInTheDocument();
  });

  test("renders social media links", () => {
    render(<Footer />);
    const facebookLink = screen.getByLabelText(/Follow us on Facebook/i);
    const instagramLink = screen.getByLabelText(/Follow us on Instagram/i);
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com");
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com");
  });

  test("renders sitemap links", () => {
    render(<Footer />);
    links.forEach(([text, path]) => {
      const link = screen.getByText(text);
      expect(link).toHaveAttribute("href", path);
    });
  });

  test("renders copyright information", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Little Lemon`)).toBeInTheDocument();
  });
});
