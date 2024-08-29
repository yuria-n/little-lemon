export function InputErrorMessage({ text }) {
  return (
    text.length > 0 && (
      <p className="text-bold form-error-message" aria-live="assertive">
        {text}
      </p>
    )
  );
}
