import { useRef, useState } from "react";

const Test = () => {
  const [input, setInput] = useState("");
  const [throttleSearch, setThrottleSearch] = useState("");

  const lastExecuted = useRef(0);

  const handleChange = (e: any) => {
    const now = Date.now();
    const throttleDelay = 1000;

    setInput(e.target.value);
    if (now - lastExecuted.current > throttleDelay) {
      setThrottleSearch(input);
      lastExecuted.current = now;
    }
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <div>{throttleSearch}</div>
    </div>
  );
};

export default Test;
