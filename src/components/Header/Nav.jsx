import clsx from "clsx";
import { usePathname } from "wouter/use-browser-location";

import { links } from "../../constants";

export function Nav() {
  const current = usePathname();

  return (
    <nav className="nav-container">
      <ul className="nav-items">
        {links.map(([text, href]) => (
          <li key={text}>
            <a
              className={clsx("nav-item", href === current && "selected")}
              href={href}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
