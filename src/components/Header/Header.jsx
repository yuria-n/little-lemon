import { Nav } from "./Nav";

import logo from "../../assets/logo.svg";

import "./Header.css";

export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <a href="/public">
          <img alt="Go to home" height={48} src={logo} />
        </a>

        <Nav />
      </div>
    </header>
  );
}
