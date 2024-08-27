import clsx from "clsx";
import { useLocation } from "wouter";

import { links } from "../../constants";
import { ButtonLink } from "../Button";

export function Nav() {
  const [current] = useLocation();

  return (
    <nav className="nav-container">
      <ul className="nav-items">
        {links.map(([text, to]) => (
          <NavItem key={text} selected={to === current} to={to} text={text} />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ className, to, text, selected }) {
  return (
    <li data-testid="nav-item">
      <ButtonLink className={clsx("nav-item", { selected })} to={to}>
        {text}
      </ButtonLink>
    </li>
  );
}
