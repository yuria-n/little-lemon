import { Section } from "../../Section";

export function Hero() {
  return (
    <Section className="home-hero-container">
      <div className="home-hero-content">
        <hgroup>
          <h1 className="text-title">
            Little Lemon
            <br />
            <span className="text-title-sub">Chicago</span>
          </h1>
          <p className="text-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </hgroup>
        <div className="image-container" />
      </div>
    </Section>
  );
}
