import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { Reviews } from "./Reviews";
import { About } from "./About";

import "./Home.css";

export function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </>
  );
}
