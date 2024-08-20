import { Section } from "../../Section";

import imgSpecial1 from "../../../assets/img_special_1.png";
import imgSpecial2 from "../../../assets/img_special_2.png";
import imgSpecial3 from "../../../assets/img_special_3.png";
import imgAbout from "../../../assets/img_about.jpg";
import { Hero } from "./Hero";

import "./Home.css";

export function Home() {
  return (
    <>
      <Hero />
      <Section className="home-special-container">
        <h2>This week's specials</h2>
        <div className="specials-grid">
          <div className="special-item">
            <img width={240} src={imgSpecial1} alt="Special 1" />
            <h3>Special 1</h3>
            <p>$12.99</p>
            <p>Description of Special 1.</p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="special-item">
            <img width={240} src={imgSpecial2} alt="Special 2" />
            <h3>Special 2</h3>
            <p>$12.99</p>
            <p>Description of Special 2.</p>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="special-item">
            <img width={240} src={imgSpecial3} alt="Special 3" />
            <h3>Special 3</h3>
            <p>$8.99</p>
            <p>Description of Special 3.</p>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      </Section>

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
