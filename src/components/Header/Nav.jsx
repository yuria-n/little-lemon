import clsx from "clsx";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Menu", "/menu"],
  ["Reservations", "/reservations"],
  ["Order Online", "/order"],
];

export function Nav() {
  const current = "/";

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
