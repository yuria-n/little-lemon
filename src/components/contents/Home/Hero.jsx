import { Section } from "../../Section";
import { Button } from "../../Button";
import { routePath } from "../../../constants";

export function Hero() {
  return (
    <Section className="home-hero-container">
      <div className="home-hero-content">
        <hgroup className="text-container">
          <h1 className="text-font-primary text-title">Little Lemon</h1>
          <h2 className="text-font-primary text-title-sub">Chicago</h2>
          <p className="text-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button
            className="button-hero"
            variant="primary"
            to={routePath.reservation}
          >
            Reserve a table
          </Button>
        </hgroup>

        <div className="image-container" />
      </div>
    </Section>
  );
}
