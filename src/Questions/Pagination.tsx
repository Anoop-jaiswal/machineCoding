import { useState } from "react";
import { sampleData } from "../SampleData";

const Pagination = () => {
  const [rowperpage, setrowperpage] = useState(5);
  const [currentpage, setcurrentpage] = useState(1);
  const totalpage = Math.ceil(sampleData.length / rowperpage);

  const lastIndex = currentpage * rowperpage;
  const firstIndex = lastIndex - rowperpage;

  const currentRows = sampleData.slice(firstIndex, lastIndex);
  return (
    <div>
      <div>
        {currentRows.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
      <div>
        <button
          onClick={() => setcurrentpage((prev) => prev - 1)}
          disabled={currentpage == 1}
        >
          prev
        </button>
        <p>{`${currentpage} / ${totalpage}`}</p>
        <button
          onClick={() => setcurrentpage((prev) => prev + 1)}
          disabled={currentpage == totalpage}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
