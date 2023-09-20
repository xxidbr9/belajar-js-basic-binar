import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const localStorageData = localStorage.getItem(key);
    if (!!localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setData(parsedData);
    }
  }, []);

  const handleDataChange = value => {
    const stringify = JSON.stringify(value);
    localStorage.setItem(key, stringify);
    setData(value);
  };

  const handleDeleteData = () => {
    localStorage.removeItem(key);
    setData(initialValue);
  };

  // dibuat array biar dia mirip useState biasa
  return [data, handleDataChange, handleDeleteData];
};

export default useLocalStorage;
