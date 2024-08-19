import { Nav } from "./Nav";

import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header>
      <a href="/">
        <img alt="Go to home" height={48} src={logo} />
      </a>

      <Nav />
    </header>
  );
}
