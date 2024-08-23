import { useCallback, useState } from "react";

export function useInput(initialValue, validate, onChange) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const handleError = useCallback(
    (e) => {
      setError(validate(e));
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
