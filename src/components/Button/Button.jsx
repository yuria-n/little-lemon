import { Link } from "wouter";
import clsx from "clsx";

import "./Button.css";

const variantMap = {
  primary: "primary",
  secondary: "secondary",
  normal: "",
};

const sizeMap = {
  sm: "sm",
  md: "",
};

export function Button({ variant, size, className, ...props }) {
  const variantClass = variantMap[variant] ?? variantMap.normal;
  const sizeClass = sizeMap[size] ?? sizeMap.md;

  return (
    <Link
      className={clsx("button-link", variantClass, sizeClass, className)}
      {...props}
    />
  );
}
