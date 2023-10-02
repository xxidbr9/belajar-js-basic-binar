import { useState } from "react";

export const useCount = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => setCount(prev => prev + 1);

  return [count, handleAdd];
};
