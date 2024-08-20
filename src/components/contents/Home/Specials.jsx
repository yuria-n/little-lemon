import { Section } from "../../Section";

import imgSpecial1 from "../../../assets/img_special_1.png";
import imgSpecial2 from "../../../assets/img_special_2.png";
import imgSpecial3 from "../../../assets/img_special_3.png";

export function Specials() {
  return (
    <Section className="home-special-container" title="This week's specials">
      <div className="home-special-cards">
        <SpecialCard
          src={imgSpecial1}
          title="Greek salad"
          price={17.99}
          desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
          onClick={console.log}
        />
        <SpecialCard
          src={imgSpecial2}
          title="Bruchetta"
          price={12.99}
          desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          onClick={console.log}
        />
        <SpecialCard
          src={imgSpecial3}
          title="Lemon cake"
          price={8.99}
          desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          onClick={console.log}
        />
      </div>
    </Section>
  );
}

function SpecialCard({ src, title, price, desc, onClick }) {
  return (
    <article className="home-special-card">
      <figure className="home-special-card-figure">
        <img className="image-content" width={240} src={src} alt={title} />
        <figcaption>
          <h3 className="text-xl text-title">{title}</h3>
          <p className="text-price">${price}</p>
          <p className="text-sm">{desc}</p>
        </figcaption>
      </figure>
      <button className="button-order" onClick={onClick}>
        Order now
      </button>
    </article>
  );
}
