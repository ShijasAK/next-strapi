import { useState, useEffect } from "react";

// Custom Hook
const useCounter = (target, symbol) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 200;
    let currentCount = 0;

    const updateCounter = () => {
      if (currentCount < target) {
        currentCount = Math.ceil(currentCount + increment);
        setCount(currentCount);
        setTimeout(updateCounter, 10);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target]);

  return `${count}`;
};

export default useCounter;
