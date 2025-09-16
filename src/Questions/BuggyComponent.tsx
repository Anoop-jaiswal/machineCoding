import { useEffect, useState } from "react";

const BuggyComponent = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error("something went wrong");
    }
  }, [error]);
  return (
    <>
      <div>Buggy component</div>
      <div>
        <button onClick={() => setError(true)}>Triger Errror</button>
      </div>
    </>
  );
};

export default BuggyComponent;
