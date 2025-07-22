import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrement = (): void => {
    if (count !== 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = (): void => {
    setCount(0);
  };

  return { count, decrement, increment, reset };
};

const Counter = () => {
  const { count, decrement, increment, reset } = useCounter();
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>Reset 0</button>
    </div>
  );
};

export default Counter;
