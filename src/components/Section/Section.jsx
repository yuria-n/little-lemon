import clsx from "clsx";

import "./Section.css";

export function Section({ className, title, children }) {
  return (
    <section className={clsx("section-container", className)}>
      <div className="section-content">
        {title && (
          <h1 className="text-font-primary text-bold text-3xl">{title}</h1>
        )}
        {children}
      </div>
    </section>
  );
}
