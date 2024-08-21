import { Section } from "../../Section";

import imageAbout1 from "../../../assets/img_about_1.png";
import imageAbout2 from "../../../assets/img_about_2.png";
import imageAbout3 from "../../../assets/img_about_3.png";

export function About() {
  return (
    <Section className="home-about-container" title="Reservations Little Lemon">
      <p className="text-sm text-desc">
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. The restaurant
        features a locally-sourced menu with daily specials. Online order and
        table reservation are available at this website.
      </p>
      <div className="image-container">
        <img
          className="image-content"
          width={200}
          src={imageAbout1}
          alt="Little Lemon chefs"
        />
        <img
          className="image-content"
          width={200}
          src={imageAbout2}
          alt="Little Lemon chef cooking"
        />
        <img
          className="image-content"
          width={200}
          src={imageAbout3}
          alt="Little Lemon interior"
        />
      </div>
    </Section>
  );
}
