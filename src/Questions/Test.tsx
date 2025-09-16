import { useRef, useState } from "react";

const Test = () => {
  const [input, setInput] = useState("");
  const [throttleSearch, setThrottleSearch] = useState("");
  const [shouldThrowError, setShouldThrowError] = useState(false);

  if (shouldThrowError) {
    // Intentionally throw an error
    throw new Error("This is a test error from the component!");
  }

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
      {/* Trigger Error Button */}
      <div>
        <button
          style={{ marginTop: "1rem", backgroundColor: "red", color: "white" }}
          onClick={() => setShouldThrowError(true)}
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
};

export default Test;
