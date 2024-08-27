import { Link } from "wouter";

import { links } from "../../constants";
import {
  IconFacebook,
  IconInstagram,
  IconLocationDot,
  IconPhone,
} from "../icons";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container" data-testid="footer">
      <div className="footer-content">
        <div>
          <div className="contact-info">
            <h3 className="text-lg">Contact Us</h3>
            <p className="text-sm">
              <IconLocationDot className="label-icon" label="Address" /> 123
              Main Street, City, State
            </p>
            <p className="text-sm">
              <IconPhone className="label-icon" label="Phone" /> (123) 456-7890
            </p>
          </div>

          <div className="social-media">
            <h3 className="text-lg">Follow Us</h3>
            <a
              className="text-lg link-icon"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow us on Facebook"
            >
              <IconFacebook aria-hidden />
            </a>
            <a
              className="text-lg link-icon"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow us on Instagram"
            >
              <IconInstagram aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg">Sitemap</h3>
          <ul>
            {links.map(([text, path], index) => (
              <li key={index}>
                <Link className="text-sm text-link" to={path}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-copywright">
          © {new Date().getFullYear()} Little Lemon
        </p>
      </div>
    </footer>
  );
}
