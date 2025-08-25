import { useEffect, useState } from "react";

export const useDebounce = <T>(input: T, delay = 500 as number): T => {
  const [debounceInput, setDebounceInput] = useState<T>(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceInput(input);
    }, delay);

    return () => clearTimeout(timer);
  }, [input]);

  return debounceInput;
};
