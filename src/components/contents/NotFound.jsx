import { Section } from "../Section";

export function NotFound() {
  return (
    <Section className="not-found-container" title="404 - Oops!">
      <p className="text-sm">
        Looks like you've taken a wrong turn. There's no lemon here!
      </p>
    </Section>
  );
}
