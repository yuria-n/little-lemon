import { useCallback, useState } from "react";

const defaultErrorMessage = "";

export function useInput(initialValue, onChange, validate) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(defaultErrorMessage);
  const handleError = useCallback(
    (e) => {
      if (validate) {
        setError(validate(e) ?? defaultErrorMessage);
      }
    },
    [validate],
  );
  const handleChange = useCallback(
    (e) => {
      handleError(e);
      setValue(onChange(e));
    },
    [handleError, onChange],
  );

  return { value, setValue: handleChange, error, setError: handleError };
}
