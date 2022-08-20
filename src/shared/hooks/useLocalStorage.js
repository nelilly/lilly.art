import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
  const storedValue = window.localStorage.getItem(key);
  return storedValue !== null
    ? JSON.parse(storedValue)
    : defaultValue;
  }
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
