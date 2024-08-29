import clsx from "clsx";

export function FormLabel({ className, required, children, ...props }) {
  return (
    <label className={clsx("text-bold", "form-label", className)} {...props}>
      {children}
      {required && <span className="form-label-required">*</span>}
    </label>
  );
}
