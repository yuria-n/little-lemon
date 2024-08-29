import { useCallback, useState } from "react";

import { submitAPI } from "../clients";

export function useSubmit() {
  const [result, setResult] = useState(null);

  const handleSubmit = useCallback((data) => {
    submitAPI(data)
      .then((res) => {
        setResult(res);
      })
      .catch(console.error);
  }, []);

  return [result, handleSubmit];
}
