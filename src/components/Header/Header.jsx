import { Link } from "wouter";

import { Nav } from "./Nav";
import { routePath } from "../../constants";

import logo from "../../assets/logo.svg";

import "./Header.css";

export function Header() {
  return (
    <header className="header-container" data-testid="header">
      <div className="header-content">
        <Link to={routePath.home}>
          <img alt="Go to home" height={48} src={logo} data-testid="logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
