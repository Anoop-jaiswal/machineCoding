import { useRef, useState, type SetStateAction } from "react";

const Throttle = () => {
  const [input, setInput] = useState("");
  const [throttleValue, setThrottleValue] = useState("");

  const lastExecute = useRef(0);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    const now = Date.now();
    const throttleDelay = 1000;

    setInput(e.target.value);

    if (now - lastExecute.current > throttleDelay) {
      setThrottleValue(input);
      lastExecute.current = now;
    }
  };
  return (
    <div>
      <input value={input} onChange={handleChange} />
      <div>throttle value after every interval{throttleValue}</div>
    </div>
  );
};

export default Throttle;
