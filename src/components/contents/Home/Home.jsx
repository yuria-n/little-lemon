import { Section } from "../../Section";
import { Hero } from "./Hero";
import { Specials } from "./Specials";

import imgAbout from "../../../assets/img_about.jpg";

import "./Home.css";
import { Reviews } from "./Reviews";

export function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Reviews />

      <Section className="home-about-container">
        <h2>About Little Lemon</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials. Online
          order and table reservation are available at this website.
        </p>
        <img
          width={600}
          src={imgAbout}
          alt="About Little Lemon"
          className="about-image"
        />
      </Section>
    </>
  );
}
