import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  let val = initialValue;

  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(key);
    if (saved !== null) {
      val = JSON.parse(saved);
    }
  }
  const [value, setValue] = useState(val);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
