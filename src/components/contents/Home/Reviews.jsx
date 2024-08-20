import { Section } from "../../Section";

const baseUrl = "https://i.pravatar.cc/48";
const reviews = [
  ["Emily J.", 5.0, 9],
  ["David M.", 4.8, 52],
  ["Sarah D.", 5.0, 5],
  ["James W.", 4.5, 8],
];

export function Reviews() {
  return (
    <Section className="home-review-container" title="Customer reviews">
      <div className="home-review-cards">
        {reviews.map(([name, star, avatar]) => (
          <ReviewCard key={name} name={name} star={star} avatar={avatar} />
        ))}
      </div>
    </Section>
  );
}

export function ReviewCard({ name, star, avatar }) {
  return (
    <div className="home-review-card">
      <p className="text-star">
        ★★★★★ <span className="text-sm text-bold">{star.toFixed(1)}</span>
      </p>
      <h3 className="text-name">{name}</h3>
      <img
        className="image-content"
        width={48}
        src={`${baseUrl}?img=${avatar}`}
        alt="Avatar"
      />
      <p className="text-sm text-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
