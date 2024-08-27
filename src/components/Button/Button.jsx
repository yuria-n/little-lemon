import clsx from "clsx";

import { sizeMap, variantMap } from "../../constants";

import "./Button.css";

export function Button({ variant, size, className, ...props }) {
  const variantClass = variantMap[variant] ?? variantMap.normal;
  const sizeClass = sizeMap[size] ?? sizeMap.md;

  return (
    <button
      className={clsx(
        "text-sm",
        "button-link",
        variantClass,
        sizeClass,
        className,
      )}
      type="button"
      data-testid="button"
      {...props}
    />
  );
}
