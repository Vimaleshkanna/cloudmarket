import { useState } from 'react';

// Custom Hook to manage localStorage
export default function useLocalStorage(key, initialValue) {
  // Get the value from localStorage, or use the initial value if it doesn't exist
  const storedValue = localStorage.getItem(key);
  
  const [value, setValue] = useState(() => {
    // If there is a stored value, parse it, otherwise use the initial value
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); // Save to localStorage
  };

  const removeLocalStorageValue = () => {
    setValue(initialValue); // Reset value in state
    localStorage.removeItem(key); // Remove from localStorage
  };

  return [value, setLocalStorageValue, removeLocalStorageValue];
}
