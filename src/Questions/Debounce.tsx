import { useEffect, useState } from "react";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [debounceSearch, setDebounce] = useState("");

  // debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(input), 500);
    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>Searching for {debounceSearch}</div>
    </div>
  );
};

export default Debounce;
