const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Menu", "/menu"],
  ["Reservations", "/reservations"],
  ["Order Online", "/order"],
];

export function Nav() {
  return (
    <nav>
      <ul>
        {links.map(([text, href]) => (
          <li key={text}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
