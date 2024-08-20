import { Section } from "../../Section";
import { Hero } from "./Hero";
import { Specials } from "./Specials";

import imgAbout from "../../../assets/img_about.jpg";

import "./Home.css";

export function Home() {
  return (
    <>
      <Hero />
      <Specials />

      <Section className="home-review-container">
        <h2>Customer reviews</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <p>★★★★★ 5.0</p>
            <img
              width={60}
              src="https://i.pravatar.cc/60"
              alt="Reviewer avatar"
            />
            <h3>Reviewer name</h3>
            <span>❝</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>❞</span>
          </div>
        </div>
      </Section>

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
