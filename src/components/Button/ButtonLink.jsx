import { Link } from "wouter";
import clsx from "clsx";

import { sizeMap, variantMap } from "../../constants";

import "./Button.css";

export function ButtonLink({ variant, size, className, ...props }) {
  const variantClass = variantMap[variant] ?? variantMap.normal;
  const sizeClass = sizeMap[size] ?? sizeMap.md;

  return (
    <Link
      className={clsx("button-link", variantClass, sizeClass, className)}
      data-testid="button-link"
      {...props}
    />
  );
}
