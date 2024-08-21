import clsx from "clsx";
import { usePathname } from "wouter/use-browser-location";

import { links } from "../../constants";
import { Button } from "../Button";

export function Nav() {
  const current = usePathname();

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
    <li>
      <Button className={clsx("nav-item", { selected })} to={to}>
        {text}
      </Button>
    </li>
  );
}
