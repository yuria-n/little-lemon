import clsx from "clsx";

export function Fieldset({ legend, className, children }) {
  return (
    <fieldset className={clsx("form-fieldset", className)}>
      <legend className="text-lg text-bold form-legend">{legend}</legend>
      {children}
    </fieldset>
  );
}
