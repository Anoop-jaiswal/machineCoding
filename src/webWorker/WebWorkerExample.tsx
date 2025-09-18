import { useState } from "react";

const WebWorkerExample = () => {
  const [squareValue, setSquareValue] = useState(null);

  const runWorker = () => {
    const worker = new Worker(new URL("./squareWorker.js", import.meta.url));

    worker.postMessage(7);

    worker.onmessage = (e) => {
      setSquareValue(e.data);
      worker.terminate();
    };
  };

  return (
    <>
      Web worker example
      <div>
        <button onClick={() => runWorker()}>Run worker</button>
      </div>
      <div>{squareValue}</div>
    </>
  );
};

export default WebWorkerExample;
