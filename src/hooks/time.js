import { useCallback, useState } from "react";

import { fetchAPI } from "../clients";

export function useTime() {
  const [times, setTimes] = useState(null);

  const getTimes = useCallback((date, type) => {
    fetchAPI(date, type)
      .then((res) => {
        setTimes(res);
      })
      .catch(console.error);
  }, []);

  return [times, getTimes];
}
